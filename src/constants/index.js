import project1 from "../assets/web1.jpg";
import project2 from "../assets/web2.jpg";
import project3 from "../assets/web3.jpg";
import project4 from "../assets/web5.png";

export const NAV_LINKS = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Tech",
    description: "Platform belanja online dengan fitur pembayaran otomatis.",
    image: project1, // <-- Tambahkan ini
    link: "#",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Visualisasi data real-time dengan integrasi API.",
    image: project2, // <-- Tambahkan ini
    link: "#",
  },
  {
    id: 3,
    title: "Website Dashboard",
    description: "Visualisasi data real-time dengan integrasi API.",
    image: project3, // <-- Tambahkan ini
    link: "#",
  },
  {
    id: 4,
    title: "Aplikasi Dashboard",
    description: "Visualisasi data real-time dengan integrasi API.",
    image: project4, // <-- Tambahkan ini
    link: "#",
  },
];
