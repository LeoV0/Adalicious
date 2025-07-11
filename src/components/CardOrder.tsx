import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function CardOrder({
  id,
  plate,
  description,
  image,
}: {
  id: number;
  plate: string;
  description: string;
  image: string;
}) {
  const router = useRouter();

  const handleOrder = async () => {
    const prenom = sessionStorage.getItem("prenom") ?? "anonyme";

    const res = await fetch("/api/commande", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prenom, menuId: id }),
    });

    if (res.ok) {
      const commande = await res.json();
      router.push(`/commande/${commande.id}`);
    } else {
      alert("Erreur lors de la commande");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="border-2 border-black rounded-lg w-10 h-10 flex justify-center items-center">
          {image}
        </div>
        <CardTitle className="pt-4">{plate}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={handleOrder} className="w-full cursor-pointer">
          Commander
        </Button>
      </CardFooter>
    </Card>
  );
}
