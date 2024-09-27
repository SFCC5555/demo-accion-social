import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SocialNetwork } from "../interfaces/SocialNetwork";
import { Locales } from "../i18n/i18n-types";
import { EditButton } from "./EditButton";

interface FooterProps {
  lan: Locales;
  editModeStatus: boolean;
}

const Footer: React.FC<FooterProps> = ({ lan, editModeStatus }) => {
  const { data, loading, error } = useFetch<SocialNetwork[]>(
    "social-networks",
    lan
  );

  console.log("Networks test", data);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative">
      <div className="flex gap-4">
        <h3>{"Siguenos en:"}</h3>
        <section className="flex gap-4">
          {data?.map((s) => (
            <Link key={s.id} to={s.url} className={s.icon_class} title={s.name} />
          ))}
        </section>
      </div>
      <div className="h-16 w-full bg-gray-500">
        © 2005 - 2024 Acción Social - Todos los derechos reservados.
      </div>
      {editModeStatus && (
        <EditButton
          link="http://localhost:1337/admin/plugins/content-type-builder/content-types/api::social-network.social-network"
          name="Editar Footer"
        />
      )}
    </section>
  );
};

export { Footer };
