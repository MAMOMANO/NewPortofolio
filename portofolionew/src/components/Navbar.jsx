import StaggeredMenu from "./StaggeredMenu";
import { socials } from "../data/socials";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Contact", href: "#contact" },
];

// const socials = [
//   { label: "GitHub", link: "https://github.com/USERNAME" },
//   { label: "LinkedIn", link: "https://linkedin.com/in/USERNAME" },
//   { label: "Instagram", link: "https://instagram.com/USERNAME" },
// ];

// Ubah bentuk data lama (href) ke bentuk yang diminta komponen (link)
const menuItems = links.map(({ label, href }) => ({
  label,
  ariaLabel: `Menuju bagian ${label}`,
  link: href,
}));

export default function Navbar() {
  return (
    <StaggeredMenu
      position="right"
      isFixed
      items={menuItems}
      socialItems={socials}
      displaySocials
      displayItemNumbering
      menuButtonColor="#ffffff"
      openMenuButtonColor="#400849"
      changeMenuColorOnOpen
      colors={["#E7B0DE", "#FF5A0A"]}
      accentColor="#FF5A0A"

    />
  );
}
