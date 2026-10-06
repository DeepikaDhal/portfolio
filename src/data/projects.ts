export interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
}

export const projects: Project[] = [
  { id: "maison-fragile", title: "Maison Fragile", image: "/images/maison-fragile.jpg", href: "/projects/maison-fragile.html" },
  { id: "bai-huo", title: "Bai Huo", image: "/images/bai-huo.jpg", href: "/projects/bai-huo.html" },
  { id: "himachal", title: "Himachal", image: "/images/himachal.jpg", href: "/projects/himachal.html" },
  { id: "olivetti", title: "Olivetti", image: "/images/Olivetti.jpg", href: "/projects/olivetti.html" },
  { id: "personal", title: "Personal", image: "/images/Personal.jpg", href: "/projects/personal.html" },
  { id: "infinity", title: "Infinity", image: "/images/infinity.jpg", href: "/projects/infinity.html" },
  { id: "tesla", title: "Tesla", image: "/images/tesla.jpg", href: "/projects/tesla.html" },
  { id: "autour-de-mur", title: "Autour de Mur", image: "/images/autour-de-mur.jpg", href: "/projects/autour-de-mur.html" },
  { id: "paintings", title: "Paintings", image: "/images/paintings.jpg", href: "/projects/paintings.html" },
];