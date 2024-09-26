import useFetch from "../hooks/useFetch";
import { Entrevista } from "../interfaces/Entrevista";
import { Card2 } from "./Card2";
import { EditButton } from "./EditButton";

interface EntrevistasProps {
  lan: string;
  editModeStatus: boolean;
}

const Entrevistas: React.FC<EntrevistasProps> = ({ lan, editModeStatus }) => {
  const { data, loading, error } = useFetch<Entrevista[]>("entrevistas", lan);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative">
      <h1>Entrevistas</h1>
      <section className="flex gap-4">
        {data?.map((entrevista) => (
          <Card2 key={entrevista.id} entrevista={entrevista} />
        ))}
      </section>
      {editModeStatus && (
        <EditButton
          link="http://localhost:1337/admin/content-manager/collection-types/api::entrevista.entrevista?page=1&pageSize=10&sort=title:ASC&plugins[i18n][locale]=es"
          name="Editar Entrevistas"
        />
      )}
    </section>
  );
};

export { Entrevistas };
