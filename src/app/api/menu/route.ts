import { prisma } from "@/lib/prisma";

export async function GET() {
  const menu = await prisma.menu.findMany();
  return Response.json(menu);
}
