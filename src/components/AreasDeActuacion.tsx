import useFetch from "../hooks/useFetch";
import { Area } from "../interfaces/Area";
import { Card } from "./Card";
import { EditButton } from "./EditButton";

interface AreasDeActuacionProps {
  lan: string;
  editModeStatus: boolean;
}

const AreasDeActuacion: React.FC<AreasDeActuacionProps> = ({
  lan,
  editModeStatus,
}) => {
  const { data, loading, error } = useFetch<Area[]>("areas-de-actuacion", lan);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative">
      <h1>Áreas de Actuación</h1>
      <section className="flex gap-4">
        {data?.map((area) => (
          <Card key={area.id} area={area} />
        ))}
      </section>
      {editModeStatus && (
        <EditButton
          link="http://localhost:1337/admin/content-manager/collection-types/api::area-de-actuacion.area-de-actuacion?page=1&pageSize=10&sort=order:ASC&plugins[i18n][locale]=es"
          name="Editar Areas de Actuación"
        />
      )}
    </section>
  );
};

export { AreasDeActuacion };
