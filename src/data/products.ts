export type Product = {
  id: string;
  name: string;
  category: "Mujer" | "Hombre" | "Calzado" | "Carteras" | "Vestidos" | "Accesorios";
  size?: string;
  price?: number;
  sold?: boolean;
  emoji: string;
};

export const categories = ["Todos", "Mujer", "Hombre", "Calzado", "Carteras", "Vestidos", "Accesorios"] as const;

export const products: Product[] = [
  { id: "1", name: "Championes Daniel Cassin", category: "Calzado", size: "38", price: 690, sold: true, emoji: "👟" },
  { id: "2", name: "Blazer fucsia", category: "Mujer", size: "M", price: 850, emoji: "🧥" },
  { id: "3", name: "Cartera de cuero", category: "Carteras", price: 550, emoji: "👜" },
  { id: "4", name: "Vestido floral", category: "Vestidos", size: "S", price: 490, emoji: "👗" },
  { id: "5", name: "Championes urbanos", category: "Calzado", size: "40", price: 750, emoji: "👟" },
  { id: "6", name: "Camisa de hombre", category: "Hombre", size: "L", price: 390, emoji: "👔" },
  { id: "7", name: "Accesorio dorado", category: "Accesorios", price: 320, emoji: "✨" },
  { id: "8", name: "Jean mom fit", category: "Mujer", size: "28", price: 590, emoji: "👖" },
];
