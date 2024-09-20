import React from "react";
import { AccionesActuales } from "../components/AccionesActuales";
import { AccionesAnteriores } from "../components/AccionesAnteriores";
import { Banner } from "../components/Banner";
import { Entrevistas } from "../components/Entrevistas";
import { EntrevistasAnteriores } from "../components/EntrevistasAnteriores";
import { InfograficosTematicos } from "../components/InfograficosTematicos";
import { Area, Section } from "../interfaces/Area";

interface DinamicAreaPageProps {
  area: Area;
}

const DinamicAreaPage: React.FC<DinamicAreaPageProps> = ({ area }) => {
  // Definir los componentes que corresponden a cada sección por nombre
  const sectionsMap: Record<string, React.ReactNode> = {
    "Acciones Actuales": <AccionesActuales />,
    "Acciones Anteriores": <AccionesAnteriores />,
    "Infograficos Tematicos": <InfograficosTematicos />,
    Entrevistas: <Entrevistas />,
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