#!/bin/bash
# PostToolUse (Edit|Write): påminner om att köra granskaren när läromedelsinnehåll ändras.
fil=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')
case "$fil" in
  *src/lib/haften/data/*|*src/lib/grammatik/*|*src/lib/data/grammatik-ovningar.ts|*src/components/grammatik/*|*src/components/infografik/*|*src/lib/arbetsomraden/*|*src/lib/data/lararhandledning*|*src/lib/data/sprakhistoria-ovningar.ts|*src/lib/data/nordiska-sprak-ovningar.ts|*src/app/ny-kursplan/*)
    case "$fil" in *__tests__*) exit 0 ;; esac
    jq -n --arg f "$fil" '{hookSpecificOutput: {hookEventName: "PostToolUse", additionalContext: ("Läromedelsinnehåll ändrades (" + $f + "). Kör granskar-agenten (subagent_type: granskare) på de ändrade filerna/id:na innan du commitar, och åtgärda fynden.")}}'
    ;;
esac
exit 0
