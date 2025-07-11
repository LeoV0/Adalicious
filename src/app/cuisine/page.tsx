// app/cuisine/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function CuisinePage() {
  const [commandes, setCommandes] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCommandes() {
      const res = await fetch("/api/commande");
      const data = await res.json();
      setCommandes(data);
    }

    fetchCommandes();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Interface Cuisine 🍽️</h1>

      {commandes.length === 0 ? (
        <p>Aucune commande pour l'instant.</p>
      ) : (
        <ul className="space-y-4">
          {commandes.map((commande) => (
            <li
              key={commande.id}
              className="border border-black p-4 rounded-lg shadow"
            >
              👤 <strong>{commande.prenom}</strong> a commandé :
              <br />
              🍽️ <strong>{commande.menu.plate}</strong>
              <div className="flex gap-4 pt-4">
                <button className="w-30 rounded-lg bg-orange-400 cursor-pointer">
                  En préparation
                </button>
                <button className="w-15 rounded-lg bg-green-500 cursor-pointer">
                  Prête
                </button>
              </div>
              <div className="pt-3">
                <button className="bg-red-500 w-45 rounded-lg text-white cursor-pointer">
                  Annuler la commande
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
