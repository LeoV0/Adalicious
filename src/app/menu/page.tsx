"use client";

import { CardOrder } from "@/components/CardOrder";
import React, { useEffect, useState } from "react";
import { useMenu } from "@/hooks/useMenu";

export default function Page() {
  const [prenom, setPrenom] = useState("utilisateur");
  const menu = useMenu();

  useEffect(() => {
    const storedPrenom = sessionStorage.getItem("prenom");
    if (storedPrenom) {
      setPrenom(storedPrenom);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-4">
      <h1 className="text-3xl">Adalicious 🥦</h1>
      <p className="text-2xl">Bonjour {prenom}</p>
      <div className="w-full max-w-md flex flex-col gap-4">
        {menu.map((item: any, index) => (
          <CardOrder
            key={index}
            id={item.id}
            plate={item.plate}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
