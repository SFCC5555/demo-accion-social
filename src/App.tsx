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
  const { data } = useFetch<Area[]>("areas-de-actuacion");

  const [lan, setLan] = useState("en");

  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(lan).then(() => setWasLoaded(true));
  }, [lan]);

  if (!wasLoaded) return <div>Language Error</div>;

  return (
    <TypesafeI18n locale={lan}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
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
