import useFetch from "../hooks/useFetch";
import { Area } from "../interfaces/Area";
import { Card } from "./Card";

const AreasDeActuacion: React.FC = ({lan}) => {
  const { data, loading, error } = useFetch<Area[]>("areas-de-actuacion", lan);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Áreas de Actuación</h1>
      <section className="flex gap-4">
        {data?.map((area) => (
          <Card key={area.id} area={area} />
        ))}
      </section>
    </>
  );
};

export { AreasDeActuacion };
