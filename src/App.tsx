import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import useFetch from "./hooks/useFetch";
import { Area } from "./interfaces/Area";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { detectLocale } from "./i18n/i18n-util";
import {
  localStorageDetector,
  navigatorDetector,
} from "typesafe-i18n/detectors";
import TypesafeI18n from "./i18n/i18n-react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import { DinamicAreaPage } from "./pages/DinamicAreaPage";
import { LanButton } from "./components/LanButton";
import { Locales } from "./i18n/i18n-types";
import { Nosotros } from "./pages/Nosotros";
import { Areas } from "./pages/Areas";
import { Informacion } from "./pages/Informacion";

function App() {
  //console.log(navigator.language);

  const [lan, setLan] = useState<Locales>("es");

  const [editModeStatus, setEditModeEstatus] = useState<boolean>(false);

  const { data } = useFetch<Area[]>("areas-de-actuacion", lan);

  const [wasLoaded, setWasLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadLocaleAsync(lan).then(() => setWasLoaded(true));
  }, [lan]);

  const changeLan = (newLan: Locales) => {
    setWasLoaded(false);
    setLan(newLan);
  };

  const toggleMode = () => {
    setEditModeEstatus((prev) => !prev);
  };

  const desactiveEditMode = () => {
    setEditModeEstatus(false);
  };

  if (!wasLoaded) return <div>Language Error</div>;

  return (
    <TypesafeI18n locale={lan}>
      <BrowserRouter>
        <NavBar
          changeLan={changeLan}
          toggleMode={toggleMode}
          desactiveEditMode={desactiveEditMode}
          lan={lan}
          editModeStatus={editModeStatus}
        />
        <Routes>
          <Route
            path="/"
            element={<Home lan={lan} editModeStatus={editModeStatus} />}
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/nosotros"
            element={<Nosotros lan={lan} editModeStatus={editModeStatus} />}
          />
          <Route
            path="/areas"
            element={
              <Areas
                areas={data ? data : []}
                lan={lan}
                editModeStatus={editModeStatus}
              />
            }
          />
          <Route
            path="/informacion"
            element={<Informacion lan={lan} editModeStatus={editModeStatus} />}
          />
          {data &&
            data.map((area) => (
              <Route
                key={area.id}
                path={`/${area.slug}`}
                element={
                  <DinamicAreaPage
                    area={area}
                    lan={lan}
                    editModeStatus={editModeStatus}
                  />
                }
              />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer lan={lan} editModeStatus={editModeStatus} />
      </BrowserRouter>
    </TypesafeI18n>
  );
}

export default App;
