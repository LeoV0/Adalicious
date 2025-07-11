import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { prenom, menuId } = body;

  if (!prenom || !menuId) {
    return new Response(JSON.stringify({ error: "Champs manquants" }), {
      status: 400,
    });
  }

  const commande = await prisma.commande.create({
    data: {
      prenom,
      menuId,
    },
  });

  return Response.json(commande);
}

import { NextResponse } from "next/server";

export async function GET() {
  const commandes = await prisma.commande.findMany({
    include: {
      menu: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(commandes);
}
