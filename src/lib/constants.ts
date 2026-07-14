export const BRAND = {
  name: "Romi Second Hand",
  handle: "romisecondhand.uy",
  logo: "/logo.png",
  owner: "Romi Texeira",
  since: 2020,
  bio: "~Tienda de ropa🌸",
  tagline: "Moda circular con onda, precios que te encantan",
  city: "Salto",
  department: "Salto",
  country: "Uruguay",
  address: "Errandonea 61, Salto, Uruguay",
  hours: "Lunes a sábado — consultá horario en Instagram",
  whatsapp: "59899973790",
  whatsappDisplay: "099 973 790",
  instagram: "https://www.instagram.com/romisecondhand.uy/",
  tiktok: "https://www.tiktok.com/@romi_texeira24",
  mapsQuery: "Errandonea 61, Salto, Uruguay",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
