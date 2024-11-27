import { NavLink, SocialLink } from "./types";
import { TfiInstagram, TfiFacebook } from "react-icons/tfi";
import { Si500Px, SiGithub } from "react-icons/si";

export const navLinks: NavLink[] = [
  { href: "/outdoors ", label: "outdoors" },
  { href: "/street ", label: "street" },
  { href: "/projects", label: "projects" },
  { href: "/about ", label: "about" },
  { href: "/prints", label: "prints" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/matthew.james.812",
    siteName: "instagram",
    icon: TfiInstagram,
  },
  {
    href: "https://www.facebook.com/matthewjamesph",
    siteName: "facebook",
    icon: TfiFacebook,
  },
];

export const footerLinks: SocialLink[] = [
  ...socialLinks,
  { href: "https://500px.com/p/mattjballard", siteName: "500px", icon: Si500Px },
  { href: "https://github.com/matchoo812", siteName: "github", icon: SiGithub },
];
