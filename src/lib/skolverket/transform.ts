import type { SkolverketSubjectResponse, TransformedSubject } from "./types";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&shy;/g, "")
    .replace(/\u00AD/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractListItems(html: string): string[] {
  const items: string[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(html)) !== null) {
    const text = stripHtml(match[1]);
    if (text) items.push(text);
  }
  return items;
}

function extractParagraphs(html: string): string[] {
  const items: string[] = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = pRegex.exec(html)) !== null) {
    const text = stripHtml(match[1]);
    if (text) items.push(text);
  }
  return items;
}

function extractHeading(html: string): string {
  const h3Match = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  if (h3Match) return stripHtml(h3Match[1]);
  const h4Match = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
  if (h4Match) return stripHtml(h4Match[1]);
  return "Centralt innehåll";
}

// Split HTML text by h4 sections to get categorized content
function splitBySections(html: string): { heading: string; items: string[] }[] {
  const sections: { heading: string; items: string[] }[] = [];
  // Split by h4 tags
  const parts = html.split(/<h4[^>]*>/i);

  for (const part of parts) {
    if (!part.trim()) continue;
    const closingH4 = part.indexOf("</h4>");
    if (closingH4 >= 0) {
      const heading = stripHtml(part.substring(0, closingH4));
      const rest = part.substring(closingH4 + 5);
      const items = extractListItems(rest);
      if (heading && items.length > 0) {
        sections.push({ heading, items });
      }
    } else {
      // No h4 heading, just extract items
      const items = extractListItems(part);
      if (items.length > 0) {
        sections.push({ heading: "", items });
      }
    }
  }

  return sections;
}

export function transformSubject(
  data: SkolverketSubjectResponse
): TransformedSubject {
  const centralContents = (data.centralContents ?? []).flatMap((cc) => {
    const yearLabel = cc.year ? `I årskurs ${cc.year}` : "";
    const sections = splitBySections(cc.text);

    if (sections.length === 0) {
      // Fallback: just extract all list items
      const items = extractListItems(cc.text);
      return items.length > 0
        ? [{ heading: yearLabel || extractHeading(cc.text), items, grades: cc.year ?? "" }]
        : [];
    }

    return sections.map((section) => ({
      heading: section.heading || yearLabel || "Centralt innehåll",
      items: section.items,
      grades: cc.year ?? "",
    }));
  });

  const knowledgeRequirements = (data.knowledgeRequirements ?? []).map((kr) => {
    const gradeLabel = kr.gradeStep
      ? `Årskurs ${kr.year ?? ""} \u2013 betyg ${kr.gradeStep}`
      : kr.year
        ? `Årskurs ${kr.year}`
        : "";
    const year = kr.year ?? "";
    const listItems = extractListItems(kr.text);
    if (listItems.length > 0) {
      return { grade: gradeLabel, year, requirements: listItems };
    }
    const paragraphs = extractParagraphs(kr.text);
    if (paragraphs.length > 0) {
      return { grade: gradeLabel, year, requirements: paragraphs };
    }
    return { grade: gradeLabel, year, requirements: [stripHtml(kr.text)] };
  });

  // Transform gymnasium courses if present
  const courses = (data.courses ?? []).map((course) => {
    const courseCc = (course.centralContents ?? []).flatMap((cc) => {
      const sections = splitBySections(cc.text);
      if (sections.length === 0) {
        const items = extractListItems(cc.text);
        return items.length > 0
          ? [{ heading: extractHeading(cc.text), items }]
          : [];
      }
      return sections.map((section) => ({
        heading: section.heading || "Centralt innehåll",
        items: section.items,
      }));
    });

    const courseKr = (course.knowledgeRequirements ?? []).map((kr) => {
      const gradeLabel = kr.gradeStep
        ? `Betyg ${kr.gradeStep}`
        : kr.year
          ? `Årskurs ${kr.year}`
          : "";
      const listItems = extractListItems(kr.text);
      if (listItems.length > 0) {
        return { grade: gradeLabel, requirements: listItems };
      }
      const paragraphs = extractParagraphs(kr.text);
      if (paragraphs.length > 0) {
        return { grade: gradeLabel, requirements: paragraphs };
      }
      return { grade: gradeLabel, requirements: [stripHtml(kr.text)] };
    });

    return {
      name: course.name ?? "",
      code: course.code ?? "",
      points: course.points ?? 0,
      description: course.description ? stripHtml(course.description) : "",
      centralContents: courseCc,
      knowledgeRequirements: courseKr,
    };
  });

  return {
    name: data.name ?? "",
    code: data.code ?? "",
    purpose: data.purpose ? stripHtml(data.purpose) : "",
    centralContents,
    knowledgeRequirements,
    ...(courses.length > 0 ? { courses } : {}),
  };
}
