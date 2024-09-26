import React from "react";
import { Locales } from "../i18n/i18n-types";
import { Formulario } from "../components/Formulario";

interface InformacionProps {
  lan: Locales;
  editModeStatus: boolean;
}

const Informacion: React.FC<InformacionProps> = ({ lan, editModeStatus }) => {
  return (
    <div>
      <h1>Informacion Page</h1>
      <Formulario />
    </div>
  );
};

export { Informacion };
