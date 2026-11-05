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
      menuButtonColor="#FFFFFF"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen
      colors={["#000000", "#FFFFFF"]}
      accentColor="#000000"
    />
  );
}
