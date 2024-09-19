import { Link } from "react-router-dom";
import { Area } from "../interfaces/Area";

interface CardProps {
  area: Area;
}

const Card: React.FC<CardProps> = ({ area }) => {
  return (
    <Link
      to={`/${area.name.toLowerCase().replaceAll(' ','-')}`}
      className={`w-40 h-40 relative text-white font-semibold border-b-8 overflow-hidden`}
      style={{ borderColor: area.color }}
    >
      <img
        src={`http://localhost:1337${area.cover.url}`}
        alt={area.cover.alternativeText}
      />
      <p className="absolute bottom-0 w-full bg-black/50">{area.name}</p>
    </Link>
  );
};

export { Card };
