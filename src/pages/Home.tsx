import { AreasDeActuacion } from "../components/AreasDeActuacion";
import { Contacto } from "../components/Contacto";
import { Entrevistas } from "../components/Entrevistas";
import { ExperienciasDeBecados } from "../components/ExperienciasDeBecados";
import { Newsletter } from "../components/Newsletter";

const Home = () => {
  return (
    <main className="bg-white">
      <h1>BANNER HOME</h1>
      <AreasDeActuacion />
      <p>DESCRIPCION</p>
      <ExperienciasDeBecados />
      <Newsletter />
      <Entrevistas />
      <Contacto />
    </main>
  );
};

export default Home;
