import { Area } from "../interfaces/Area";

interface BannerProps {
  area: Area;
}

const Banner: React.FC<BannerProps> = ({ area }) => {
  return (
    <section
      className={`w-full h-64 relative text-white font-semibold border-b-8 overflow-hidden`}
      style={{ borderColor: area.color }}
    >
      <img
        src={`http://localhost:1337${area.banner.url}`}
        alt={area.banner.alternativeText}
      />
      <div className="absolute bottom-0 w-full bg-black/50" >
        {" "}
        <p className=" ">{area.name}</p>
        <p className=" ">{area.summary}</p>
      </div>
    </section>
  );
};

export { Banner };
