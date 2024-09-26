import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Locales } from "../i18n/i18n-types";
import { Area } from "../interfaces/Area";

interface AreasProps {
  areas: Area[];
  lan: Locales;
  editModeStatus: boolean;
}

const Areas: React.FC<AreasProps> = ({ areas, lan, editModeStatus }) => {
  return (
    <section>
      {areas.map((area) => (
        <section key={area.id} className="relative">
          {" "}
          <Banner area={area} />
          <Link
            to={`/${area.slug}`}
            className="absolute top-1/2 right-1/2 text-white p-5 bg-black/20 rounded-sm border-white border-2"
          >
            Mas informacion
          </Link>
        </section>
      ))}
    </section>
  );
};

export { Areas };
