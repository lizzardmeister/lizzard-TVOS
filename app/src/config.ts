// Personalização vive aqui. Na Fase 4 isto migra para um arquivo editável
// pela própria TV. Por enquanto, é a fonte da verdade da home.

export type Tile = {
  id: string;
  label: string;
  /** Tipo de ação ao dar OK no tile. */
  kind: "app" | "hdmi" | "placeholder";
  /** Para kind "app": id do app webOS a lançar (ex.: "youtube.leanback.v4"). */
  appId?: string;
  /** Para kind "hdmi": número da entrada. */
  hdmiInput?: number;
  /** Cor de destaque do tile (opcional; cai no tema). */
  accent?: string;
};

export type Theme = {
  bg: string;
  surface: string;
  text: string;
  textDim: string;
  accent: string;
  wallpaper?: string; // URL ou caminho; opcional.
};

export const theme: Theme = {
  bg: "#0a0a0f",
  surface: "#16161f",
  text: "#f5f5f7",
  textDim: "#8a8a99",
  accent: "#3ddc84",
};

// Tiles de exemplo. Os appId reais serão descobertos na TV (Fase 3).
export const tiles: Tile[] = [
  { id: "netflix", label: "Netflix", kind: "placeholder", accent: "#e50914" },
  { id: "youtube", label: "YouTube", kind: "placeholder", accent: "#ff0000" },
  { id: "primevideo", label: "Prime Video", kind: "placeholder", accent: "#00a8e1" },
  { id: "disney", label: "Disney+", kind: "placeholder", accent: "#113ccf" },
  { id: "spotify", label: "Spotify", kind: "placeholder", accent: "#1db954" },
  { id: "hdmi1", label: "HDMI 1", kind: "hdmi", hdmiInput: 1 },
  { id: "hdmi2", label: "HDMI 2", kind: "hdmi", hdmiInput: 2 },
  { id: "settings", label: "Ajustes", kind: "placeholder" },
];
