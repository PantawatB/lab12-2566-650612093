import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  let Theme;
  if (theme.name === "light") {
    Theme = lang.detail.lightActivated;
  } else Theme = lang.detail.darkActivated;

  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {Theme}
    </p>
  );
};
