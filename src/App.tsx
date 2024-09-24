import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import useFetch from "./hooks/useFetch";
import { Area } from "./interfaces/Area";
import { AreaPage } from "./pages/AreaPage";
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

function App() {
  //console.log(navigator.language);

  const [lan, setLan] = useState("es");
  const { data } = useFetch<Area[]>("areas-de-actuacion", lan);

  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(lan).then(() => setWasLoaded(true));
  }, [lan]);

  const changeLan = (newLan: string) => {
    console.log("LanTest: ", newLan);
    setWasLoaded(false);
    setLan(newLan);
  };

  if (!wasLoaded) return <div>Language Error</div>;

  return (
    <TypesafeI18n locale={lan}>
      <BrowserRouter>
        <NavBar changeLan={changeLan} lan={lan} />
        <Routes>
          <Route path="/" element={<Home lan={lan} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {data &&
            data.map((area) => (
              <Route
                key={area.id}
                path={`/${area.slug}`}
                element={<DinamicAreaPage area={area} />}
              />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TypesafeI18n>
  );
}

export default App;
