import { Link } from "react-router-dom";
import { Entrevista } from "../interfaces/Entrevista";

interface Card2Props {
  entrevista: Entrevista;
}

const Card2: React.FC<Card2Props> = ({ entrevista }) => {
  return (
    <Link
      to={`${entrevista.url}`}
      className={`w-40 h-40 font-semibold  overflow-hidden`}
    >
      <img
        src={`http://localhost:1337${entrevista.cover.url}`}
        alt={entrevista.cover.alternativeText}
      />
      <p className="bottom-0 w-ful">{entrevista.title}</p>
    </Link>
  );
};

export { Card2 };
