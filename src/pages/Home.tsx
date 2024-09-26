import { AreasDeActuacion } from "../components/AreasDeActuacion";
import { BannerHome } from "../components/BannerHome";
import { Contacto } from "../components/Contacto";
import { Entrevistas } from "../components/Entrevistas";
import { ExperienciasDeBecados } from "../components/ExperienciasDeBecados";
import { Newsletter } from "../components/Newsletter";
import { Locales } from "../i18n/i18n-types";

interface HomeProps {
  lan: Locales;
  editModeStatus: boolean;
}

const Home: React.FC<HomeProps> = ({ lan, editModeStatus }) => {
  return (
    <main className="bg-white">
      <BannerHome />
      <AreasDeActuacion lan={lan} editModeStatus={editModeStatus} />
      <p>DESCRIPCION</p>
      <ExperienciasDeBecados lan={lan} editModeStatus={editModeStatus} />
      <Newsletter />
      <Entrevistas lan={lan} editModeStatus={editModeStatus} />
      <Contacto />
    </main>
  );
};

export default Home;
