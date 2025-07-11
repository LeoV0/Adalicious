import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then(setMenu)
      .catch((err) => console.error("Erreur menu:", err));
  }, []);

  return menu;
};
