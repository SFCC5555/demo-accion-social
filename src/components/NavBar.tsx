import { Link, NavLink } from "react-router-dom";
import { useI18nContext } from "../i18n/i18n-react";
import { Locales } from "../i18n/i18n-types";
import { LanButton } from "./LanButton";
import { ModeButton } from "./ModeButton";
import { useState } from "react";
import { RegisterButton } from "./RegisterButton";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";
import logo from "../assets/logo-accion-social.svg"

interface NavBarProps {
  changeLan: (lan: Locales) => void;
  toggleMode: () => void;
  desactiveEditMode: () => void;
  lan: Locales;
  editModeStatus: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  changeLan,
  toggleMode,
  desactiveEditMode,
  lan,
  editModeStatus,
}) => {
  const { LL } = useI18nContext();

  const [isAuth, setIsAuth] = useState(false);

  const auth = () => {
    setIsAuth((prev) => !prev);
    desactiveEditMode();
  };

  return (
    <div className="h-16 w-full text-blue-900 bg-white flex justify-between items-center px-8">
      <Link to={"/"}>
        <img src={logo} alt="Logo Acción Social" className="w-40" />
      </Link>
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
        <RegisterButton />
        {isAuth ? <LogoutButton auth={auth} /> : <LoginButton auth={auth} />}
        {isAuth && (
          <ModeButton
            lan={lan}
            toggleMode={toggleMode}
            editModeStatus={editModeStatus}
          />
        )}

        <LanButton changeLan={changeLan} lan={lan} />
      </div>
    </div>
  );
};

export { NavBar };
