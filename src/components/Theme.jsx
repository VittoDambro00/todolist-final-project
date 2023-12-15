import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function Theme() {
  const [isDark, setTema] = useState(false);

  useEffect(() => {
    console.log(isDark);
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);
  return (
    <div>
      <Icon
        icon="ph:moon"
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
