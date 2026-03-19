import type { TransformedSubject } from "@/lib/skolverket/types";

// Map grade ranges to the year values used in kunskapskrav
const GRADE_RANGE_TO_KR_YEARS: Record<string, string[]> = {
  "1-3": ["1", "3"],
  "4-6": ["6"],
  "7-9": ["9"],
};

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
    ? subject.knowledgeRequirements.filter((kr) => {
        const yearNum = kr.grade.replace("Årskurs ", "");
        return krYears.includes(yearNum);
      })
    : subject.knowledgeRequirements;

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

      {/* Centralt innehåll */}
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
                <ul className="space-y-2">
                  {cc.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Kunskapskrav */}
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
                <ul className="space-y-2">
                  {kr.requirements.map((req, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
