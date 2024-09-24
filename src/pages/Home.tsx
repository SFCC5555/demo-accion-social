import { AreasDeActuacion } from "../components/AreasDeActuacion";
import { Contacto } from "../components/Contacto";
import { Entrevistas } from "../components/Entrevistas";
import { ExperienciasDeBecados } from "../components/ExperienciasDeBecados";
import { Newsletter } from "../components/Newsletter";

const Home = ({ lan }) => {
  return (
    <main className="bg-white">
      <h1>BANNER HOME</h1>
      <AreasDeActuacion lan={lan} />
      <p>DESCRIPCION</p>
      <ExperienciasDeBecados />
      <Newsletter />
      <Entrevistas />
      <Contacto />
    </main>
  );
};

export default Home;
