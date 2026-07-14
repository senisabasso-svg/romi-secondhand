export type GalleryItem = {
  id: string;
  label: string;
  emoji: string;
  gradient: string;
};

export const galleryHighlights: GalleryItem[] = [
  { id: "ropa", label: "Ropa nueva", emoji: "👗", gradient: "from-rosa to-rosa-medio" },
  { id: "vestidos", label: "Vestidos", emoji: "🌸", gradient: "from-fucsia/80 to-rosa-medio" },
  { id: "bolsos", label: "Bolsos y carteras", emoji: "👜", gradient: "from-burdeos/70 to-rosa" },
  { id: "calzado", label: "Calzado", emoji: "👟", gradient: "from-rosa-medio to-crema" },
  { id: "local", label: "Nuestro local", emoji: "🏠", gradient: "from-dorado/40 to-rosa" },
  { id: "comunidad", label: "Nuestra comunidad", emoji: "💕", gradient: "from-fucsia/60 to-burdeos/60" },
  { id: "hombre", label: "Ropa de hombre", emoji: "👔", gradient: "from-carbon/20 to-rosa/60" },
  { id: "uy", label: "Envíos Uruguay", emoji: "🇺🇾", gradient: "from-rosa to-fucsia/50" },
];
