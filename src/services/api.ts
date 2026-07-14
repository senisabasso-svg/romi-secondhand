const API_BASE = import.meta.env.VITE_API_BASE?.replace(/\/$/, "");
const ID_TIENDA = import.meta.env.VITE_TIENDA_ID;

export interface Prenda {
  orden: number;
  nombre: string;
  precio: number;
  descripcion: string | null;
  imagen: string | null;
}

export interface VitrinaResponse {
  idSecond: number;
  tienda: { id: number; nombre: string; logoUrl: string | null };
  prendas: Prenda[];
}

export async function obtenerPrendas(): Promise<VitrinaResponse> {
  if (!API_BASE || !ID_TIENDA) {
    throw new Error("Faltan configurar VITE_API_BASE o VITE_TIENDA_ID");
  }

  const response = await fetch(
    `${API_BASE}/api/public/web-vistas/${ID_TIENDA}`,
    { headers: { Accept: "application/json" } },
  );

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.error ?? "No se pudieron obtener las prendas");
  }

  return response.json();
}
