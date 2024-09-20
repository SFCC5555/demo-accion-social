import { useI18nContext } from "../i18n/i18n-react";

const NavBar = () => {

  const { LL } = useI18nContext()
  return (
    <div className="h-16 w-full text-white bg-blue-900 flex justify-between items-center px-8">
      <div>NavBar </div>
      <h1>{LL.HI({ name: "Severo" })}</h1>
      <h1>{LL.TITLE()}</h1>
      <button>Language</button>
    </div>
  );
};

export { NavBar };
