"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const prenom = event.target.prenom.value;
    sessionStorage.setItem("prenom", prenom);
    router.push("/menu"); // Navigate to the menu page
  };

  return (
    <>
      <Link href="http://localhost:3000/cuisine">
        <div className="flex justify-end w-full">
          <button className=" border-black bg-black mr-2 text-white rounded-lg cursor-pointer p-1 mt-2 ">
            Interface Cuisine 🍽️
          </button>
        </div>
      </Link>

      <div className="bg-white w-full h-screen flex justify-center items-center flex-col">
        <span>🥦</span>
        <h1 className="text-4xl">Bienvenue sur Adalicious</h1>
        <p className="text-lg">
          Pour commencer, peux-tu me donner ton prénom :
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center mt-5">
            <input
              type="text"
              name="prenom"
              className="border-2 border-black rounded-lg p-1"
            />
            <button
              type="submit"
              className="cursor-pointer ml-2 border-black bg-black text-white w-20 h-8 rounded-lg mt-3"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
