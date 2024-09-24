import React, { useState } from "react";

interface LanButtonProps {
  changeLan: (lan: string) => void;
  lan: string;
}

const LanButton: React.FC<LanButtonProps> = ({ changeLan, lan }) => {
  const [lanMenuStatus, setLanMenuStatus] = useState(false);
  const languages = ["es", "en"];

  return (
    <button
      onClick={() => setLanMenuStatus((prev) => !prev)}
      className="relative bg-blue-500 p-5 border-2"
    >
      language: {lan}
      {lanMenuStatus && (
        <section className="w-full absolute bottom-0 left-0 translate-y-full bg-blue-500 border-2">
          {languages.map((l) =>
            lan === l ? (
              <div
                key={l}
                className={"opacity-50"}
              >
                {l}
              </div>
            ) : (
              <div
                key={l}
                onClick={() => changeLan(l)}
              >
                {l}
              </div>
            )
          )}
        </section>
      )}
    </button>
  );
};

export { LanButton };
