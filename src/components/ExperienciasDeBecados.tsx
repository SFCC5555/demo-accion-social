import useFetch from "../hooks/useFetch";
import { Experiencia } from "../interfaces/Experiencia";
import { Card2 } from "./Card2";
import { EditButton } from "./EditButton";

interface ExperienciasDeBecadosProps {
  lan: string;
  editModeStatus: boolean;
}

const ExperienciasDeBecados: React.FC<ExperienciasDeBecadosProps> = ({
  lan,
  editModeStatus,
}) => {
  const { data, loading, error } = useFetch<Experiencia[]>("experiencias", lan);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative">
      <h1>Experiencia de Becados</h1>
      <section className="flex gap-4">
        {data?.map((experiencia) => (
          <Card2 key={experiencia.id} entrevista={experiencia} />
        ))}
      </section>
      {editModeStatus && (
        <EditButton
          link="http://localhost:1337/admin/content-manager/collection-types/api::experiencia.experiencia?page=1&pageSize=10&sort=title:ASC&plugins[i18n][locale]=es"
          name="Editar Experiencia de Becados"
        />
      )}
    </section>
  );
};

export { ExperienciasDeBecados };
