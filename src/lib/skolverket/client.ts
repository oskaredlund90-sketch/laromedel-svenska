import { SKOLVERKET_API_BASE, SUBJECT_CODES } from "./constants";
import type { SkolverketApiResponse, SkolverketSubjectResponse, TransformedSubject } from "./types";
import { transformSubject } from "./transform";

const REVALIDATE_SECONDS = 86400; // 24 hours

async function fetchSubject(code: string): Promise<SkolverketSubjectResponse> {
  const res = await fetch(`${SKOLVERKET_API_BASE}/v1/subjects/${code}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Skolverket API error: ${res.status} for subject ${code}`);
  }

  const data: SkolverketApiResponse = await res.json();
  return data.subject;
}

export async function getSvenskaGrundskola(): Promise<TransformedSubject> {
  const data = await fetchSubject(SUBJECT_CODES.svenska_grundskola);
  return transformSubject(data);
}

export async function getSvaGrundskola(): Promise<TransformedSubject> {
  const data = await fetchSubject(SUBJECT_CODES.sva_grundskola);
  return transformSubject(data);
}

export async function getSvenskaGymnasium(): Promise<TransformedSubject> {
  const data = await fetchSubject(SUBJECT_CODES.svenska_gymnasium);
  return transformSubject(data);
}

export async function getSvaGymnasium(): Promise<TransformedSubject> {
  const data = await fetchSubject(SUBJECT_CODES.sva_gymnasium);
  return transformSubject(data);
}
