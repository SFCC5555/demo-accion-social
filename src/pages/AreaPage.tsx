import { AccionesActuales } from "../components/AccionesActuales";
import { AccionesAnteriores } from "../components/AccionesAnteriores";
import { Banner } from "../components/Banner";
import { Entrevistas } from "../components/Entrevistas";
import { EntrevistasAnteriores } from "../components/EntrevistasAnteriores";
import { InfograficosTematicos } from "../components/InfograficosTematicos";
import { Area } from "../interfaces/Area";

interface AreaPageProps {
  area: Area;
}
const AreaPage: React.FC<AreaPageProps> = ({ area }) => {
  return (
    <>
      <Banner area={area} />
      {area.name === "Bienestar" && (
        <>
          <AccionesActuales />
          <AccionesAnteriores />
          <InfograficosTematicos />
        </>
      )}
      {area.name === "Ciudadanía y Desarrollo Sostenible" && (
        <>
          <Entrevistas />
          <EntrevistasAnteriores />
        </>
      )}
    </>
  );
};

export { AreaPage };
