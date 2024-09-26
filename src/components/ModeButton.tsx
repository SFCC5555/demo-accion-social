import React, { useState } from "react";
import { Locales } from "../i18n/i18n-types";

interface ModeButtonProps {
  lan: Locales;
  toggleMode: () => void;
  editModeStatus: boolean;
}

const ModeButton: React.FC<ModeButtonProps> = ({
  lan,
  toggleMode,
  editModeStatus,
}) => {
  return (
    <button onClick={toggleMode}>
      {editModeStatus ? "Edit Mode" : "View Mode"}
    </button>
  );
};

export { ModeButton };
