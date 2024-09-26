import { Link, NavLink } from "react-router-dom";
import { useI18nContext } from "../i18n/i18n-react";
import { Locales } from "../i18n/i18n-types";
import { LanButton } from "./LanButton";
import { ModeButton } from "./ModeButton";

interface NavBarProps {
  changeLan: (lan: Locales) => void;
  toggleMode: () => void;
  lan: Locales;
  editModeStatus: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  changeLan,
  toggleMode,
  lan,
  editModeStatus,
}) => {
  const { LL } = useI18nContext();

  return (
    <div className="h-16 w-full text-blue-900 bg-white flex justify-between items-center px-8">
      <Link to={"/"}>Accion Social Logo</Link>
      {/* <h1>{LL.HI({ name: "Severo" })}</h1>
      <h1>{LL.TITLE()}</h1> */}
      <div className="flex items-center gap-4">
        <NavLink
          to={"/nosotros"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Nosotros
        </NavLink>
        <NavLink
          to={"/areas"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Áreas
        </NavLink>
        <NavLink
          to={"/informacion"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Información
        </NavLink>
        <ModeButton
          lan={lan}
          toggleMode={toggleMode}
          editModeStatus={editModeStatus}
        />
        <LanButton changeLan={changeLan} lan={lan} />
      </div>
    </div>
  );
};

export { NavBar };
