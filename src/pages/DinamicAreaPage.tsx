import React from "react";
import { AccionesActuales } from "../components/AccionesActuales";
import { AccionesAnteriores } from "../components/AccionesAnteriores";
import { Banner } from "../components/Banner";
import { Entrevistas } from "../components/Entrevistas";
import { EntrevistasAnteriores } from "../components/EntrevistasAnteriores";
import { InfograficosTematicos } from "../components/InfograficosTematicos";
import { Area, Section } from "../interfaces/Area";
import { Locales } from "../i18n/i18n-types";

interface DinamicAreaPageProps {
  area: Area;
  lan: Locales;
  editModeStatus: boolean;
}

const DinamicAreaPage: React.FC<DinamicAreaPageProps> = ({
  area,
  lan,
  editModeStatus,
}) => {
  // Definir los componentes que corresponden a cada sección por nombre
  const sectionsMap: Record<string, React.ReactNode> = {
    "Acciones Actuales": <AccionesActuales />,
    "Acciones Anteriores": <AccionesAnteriores />,
    "Infograficos Tematicos": <InfograficosTematicos />,
    Entrevistas: <Entrevistas lan={lan} editModeStatus={editModeStatus} />,
    "Entrevistas Anteriores": <EntrevistasAnteriores />,
  };

  return (
    <>
      <Banner area={area} />
      {area.sections.map((section: Section) =>
        sectionsMap[section.name] ? sectionsMap[section.name] : null
      )}
    </>
  );
};

export { DinamicAreaPage };
