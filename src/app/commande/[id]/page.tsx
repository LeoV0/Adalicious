import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function CommandePage({
  params,
}: {
  params: { id: string };
}) {
  const commandeId = parseInt(params.id, 10);

  const commande = await prisma.commande.findUnique({
    where: { id: commandeId },
    include: { menu: true },
  });

  if (!commande) return notFound();

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="w-full max-w-sm">
        <h1 className="text-2xl pl-4">Adalicious 🥦</h1>
        <CardHeader>
          <CardContent>Merci pour ta commande, {commande.prenom}</CardContent>
          <CardTitle className="pt-4 pl-6">{commande.menu.plate}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="pl-6">
            {commande.menu.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
