import useFetch from "../hooks/useFetch";
import { Area } from "../interfaces/Area";

const AreasDeActuacion: React.FC = () => {
  const { data, loading, error } = useFetch<Area[]>("areas-de-actuacion");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Áreas de Actuación</h1>
      <section>
        {data?.map((a) => (
          <div key={a.id}>{a.attributes.name}</div>
        ))}
      </section>
    </>
  );
};

export { AreasDeActuacion };
