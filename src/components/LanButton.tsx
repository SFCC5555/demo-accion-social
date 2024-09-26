import React, { useState } from "react";
import { Locales } from "../i18n/i18n-types";
import { Link } from "react-router-dom";

interface LanButtonProps {
  changeLan: (lan: Locales) => void;
  lan: Locales;
}

const LanButton: React.FC<LanButtonProps> = ({ changeLan, lan }) => {
  const [lanMenuStatus, setLanMenuStatus] = useState<boolean>(false);
  const languages: Locales[] = ["es", "en"];

  return (
    <button
      onClick={() => setLanMenuStatus((prev) => !prev)}
      className="relative bg-blue-500 p-5 border-2"
    >
      language: {lan}
      {lanMenuStatus && (
        <section className="w-full absolute bottom-0 left-0 translate-y-full bg-blue-500 border-2 z-10">
          {languages.map((l) =>
            lan === l ? (
              <div key={l} className={"opacity-50"}>
                {l}
              </div>
            ) : (
              <Link key={l} to={"/"} onClick={() => changeLan(l)}>
                {l}
              </Link>
            )
          )}
        </section>
      )}
    </button>
  );
};

export { LanButton };
