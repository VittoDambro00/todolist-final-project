import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function Theme() {
  const [isDark, setTema] = useState(false);
  const [icon, setIcon] = useState("ph:sun");

  useEffect(() => {
    isDark
      ? (document.body.classList.add("dark"), setIcon("ph:moon"))
      : (document.body.classList.remove("dark"),setIcon("ph:sun"));
  }, [isDark]);
  return (
    <div>
      <Icon
        icon={icon}
        id="darkTheme"
        onClick={() => {
          setTema(!isDark);
        }}
        className="hover:cursor-pointer"
        width="30"
        height="30"
      />
    </div>
  );
}
