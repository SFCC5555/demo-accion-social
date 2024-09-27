import React from "react";

interface LoginButtonProps {
  auth: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ auth }) => {
  return <button onClick={auth}>Login</button>;
};

export { LoginButton };
