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

function App() {
  console.log(navigator.language);

  const [lan, setLan] = useState("es");
  const { data } = useFetch<Area[]>("areas-de-actuacion", lan);

  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(lan).then(() => setWasLoaded(true));
  }, [lan]);

  const toggleLan = () => {
    setWasLoaded(false);
    setLan((prevLan) => (prevLan === "es" ? "en" : "es"));
  };

  if (!wasLoaded) return <div>Language Error</div>;

  return (
    <TypesafeI18n locale={lan}>
      <BrowserRouter>
        <NavBar />
        <button onClick={toggleLan} className="bg-blue-500 p-5 border-2">
          es-en
        </button>
        <Routes>
          <Route path="/" element={<Home lan={lan} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {data &&
            data.map((area) => (
              <Route
                key={area.id}
                path={`/${area.name.toLowerCase().replaceAll(" ", "-")}`}
                element={<AreaPage area={area} />}
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
