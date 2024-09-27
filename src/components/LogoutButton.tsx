import React from "react";

interface LogoutButtonProps {
  auth: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ auth }) => {
  return <button onClick={auth}>Logout</button>;
};

export { LogoutButton };
