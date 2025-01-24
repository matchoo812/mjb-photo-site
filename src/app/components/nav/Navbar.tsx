"use client";

import { useState } from "react";
import Logo from "./Logo";
import MobileMenuTrigger from "./MobileMenuTrigger";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMobileMenu = () => {
    setOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeMobileMenu = () => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMobileMenu = () => {
    if (!open) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  return (
    <header className='w-full shadow-md dark:glow mb-2 z-20' id='header'>
      <nav className='flex flex-col md:flex-row sm:justify-between items-center py-5 px-[5vw] mx-auto text-foreground brightness-110 bg-overlay backdrop-blur-sm'>
        <Logo />
        <NavLinks open={open} closeMobileMenu={closeMobileMenu} />
        <div className='flex justify-center items-center mt-2 md:mt-0'>
          <SocialLinks />
          <ModeToggle />
        </div>
        <MobileMenuTrigger open={open} toggleMobileMenu={toggleMobileMenu} />
      </nav>
    </header>
  );
}
export default Navbar;
