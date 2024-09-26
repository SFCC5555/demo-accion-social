import { Testimonios } from "../components/Testimonios";
import { Locales } from "../i18n/i18n-types";

interface NosotrosProps {
  lan: Locales;
  editModeStatus: boolean;
}

const Nosotros: React.FC<NosotrosProps> = ({ lan, editModeStatus }) => {
  return (
    <main className="bg-white">
      <h1>Nuestro compromiso con la acción social</h1>
      <p>
        FUNIBER se compromete a mejorar la calidad de vida de las comunidades
        más vulnerables a través de iniciativas educativas, culturales y de
        desarrollo sostenible. Descubre cómo nuestras acciones están generando
        un impacto positivo en todo el mundo.
      </p>
      <Testimonios />
    </main>
  );
};

export { Nosotros };
