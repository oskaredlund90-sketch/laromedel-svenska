"use client";

import { useEffect, useState } from "react";
import { standardInstallning, type Lasarsinstallning } from "./lasar";

const NYCKEL = "veckansord-lasar";

/** Lärarens inställning för läsåret, sparad i webbläsaren (bara en bekvämlighet). */
export function useLasarsinstallning(): [Lasarsinstallning, (i: Lasarsinstallning) => void] {
  const [inst, setInst] = useState<Lasarsinstallning>(() => standardInstallning());

  useEffect(() => {
    try {
      const sparad = localStorage.getItem(NYCKEL);
      // Läses först efter första renderingen så att server- och klientrendering stämmer överens.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (sparad) setInst({ ...standardInstallning(), ...JSON.parse(sparad) });
    } catch {
      // Ingen åtkomst till localStorage – standardvärden används.
    }
  }, []);

  const satt = (i: Lasarsinstallning) => {
    setInst(i);
    try {
      localStorage.setItem(NYCKEL, JSON.stringify(i));
    } catch {
      // ignorera
    }
  };
  return [inst, satt];
}
