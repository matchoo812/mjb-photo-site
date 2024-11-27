import { NavLink, SocialLink } from "./types";
import { TfiInstagram, TfiFacebook } from "react-icons/tfi";

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
