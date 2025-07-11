import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const menuItems = [
  {
    plate: "Hello World Burger",
    description:
      "Un cheeseburger classique (pain, steak, fromage, salade, sauce).",
    image: "🍔",
  },
  {
    plate: "404 Not Found Fries",
    description:
      "Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !).",
    image: "🍟",
  },
  {
    plate: "JSON Nuggets",
    description:
      "Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).",
    image: "🍗",
  },
  {
    plate: "Git Pull Tacos",
    description: "Un taco simple avec poulet, salade, fromage et sauce.",
    image: "🌮",
  },
  {
    plate: "Front-end Salad",
    description: "Une salade légère avec tomates, feta et vinaigrette maison.",
    image: "🥗",
  },
  {
    plate: "Back-End Brownie",
    description: "Un brownie moelleux au chocolat.",
    image: "🍫",
  },
  {
    plate: "Full Stack Menu",
    description: "Un combo burger, frites et boisson.",
    image: "🥗",
  },
];

async function main() {
  for (const item of menuItems) {
    await prisma.menu.create({ data: item });
  }
}

main()
  .then(() => {
    console.log("Seed terminé");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
