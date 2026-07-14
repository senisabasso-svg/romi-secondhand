import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("¡Hola Romi! Te escribo desde la web 🌸")}
      target="_blank"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fucsia text-white shadow-lg animate-float hover:bg-burdeos"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
