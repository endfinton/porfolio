export type Project = {
  title: string;
  url?: string;
  description: string;
  technologies: string[];
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Holocards Vault",
    url: "https://holocards.luislluy.ovh",
    description:
      "Buscador y boveda 3D para cartas de Magic. Permite consultar cartas con Scryfall, ver el efecto foil y guardar cartas por usuario.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Scryfall"],
  },
  {
    title: "HoyoTools",
    description:
      "Toolkit para Honkai: Star Rail centrada en planificar roster, banners, tier list y builds. El proyecto esta detenido temporalmente mientras desarrollo una V2.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Google Auth"],
    status: "× Detenido temporalmente · V2 en desarrollo",
  },
];
