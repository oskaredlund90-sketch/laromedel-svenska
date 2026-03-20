import type { TransformedSubject, TransformedCourse } from "@/lib/skolverket/types";

// Map grade ranges to the year values used in kunskapskrav
const GRADE_RANGE_TO_KR_YEARS: Record<string, string[]> = {
  "1-3": ["1", "3"],
  "4-6": ["6"],
  "7-9": ["9"],
};

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, j) => (
        <li
          key={j}
          className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300"
        >
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CourseSection({ course }: { course: TransformedCourse }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-4 flex items-baseline gap-3">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {course.name}
        </h3>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {course.points} poäng
        </span>
      </div>

      {course.description && (
        <p className="mb-6 text-sm text-neutral-600 leading-relaxed dark:text-neutral-400">
          {course.description}
        </p>
      )}

      {course.centralContents.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Centralt innehåll
          </h4>
          <div className="space-y-4">
            {course.centralContents.map((cc, i) => (
              <div key={i}>
                {cc.heading && cc.heading !== "Centralt innehåll" && (
                  <h5 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {cc.heading}
                  </h5>
                )}
                <ContentList items={cc.items} />
              </div>
            ))}
          </div>
        </div>
      )}

      {course.knowledgeRequirements.length > 0 && (
        <div>
          <h4 className="mb-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Kunskapskrav
          </h4>
          <div className="space-y-4">
            {course.knowledgeRequirements.map((kr, i) => (
              <div key={i}>
                {kr.grade && (
                  <h5 className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {kr.grade}
                  </h5>
                )}
                <ContentList items={kr.requirements} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface Props {
  subject: TransformedSubject;
  gradeFilter?: string;
}

export function CurriculumDisplay({ subject, gradeFilter }: Props) {
  const filteredContents = gradeFilter
    ? subject.centralContents.filter(
        (cc) => !cc.grades || cc.grades === gradeFilter
      )
    : subject.centralContents;

  const krYears = gradeFilter ? GRADE_RANGE_TO_KR_YEARS[gradeFilter] : null;
  const filteredRequirements = krYears
    ? subject.knowledgeRequirements.filter((kr) =>
        krYears.includes(kr.year)
      )
    : subject.knowledgeRequirements;

  const hasCourses = subject.courses && subject.courses.length > 0;

  return (
    <div className="space-y-10">
      {/* Syfte */}
      {subject.purpose && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
            Syfte
          </h2>
          <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">
            {subject.purpose}
          </p>
        </section>
      )}

      {/* Grundskola: Centralt innehåll */}
      {filteredContents.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
            Centralt innehåll
          </h2>
          <div className="space-y-6">
            {filteredContents.map((cc, i) => (
              <div key={i}>
                {cc.heading && (
                  <h3 className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {cc.heading}
                    {cc.grades && (
                      <span className="ml-2 text-sm font-normal text-neutral-500">
                        (åk {cc.grades})
                      </span>
                    )}
                  </h3>
                )}
                <ContentList items={cc.items} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grundskola: Kunskapskrav */}
      {filteredRequirements.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
            Kunskapskrav
          </h2>
          <div className="space-y-6">
            {filteredRequirements.map((kr, i) => (
              <div key={i}>
                {kr.grade && (
                  <h3 className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {kr.grade}
                  </h3>
                )}
                <ContentList items={kr.requirements} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gymnasiet: Kurser */}
      {hasCourses && (
        <section>
          <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
            Kurser
          </h2>
          <div className="space-y-8">
            {subject.courses!.map((course) => (
              <CourseSection key={course.code} course={course} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
