"use client";

import { useState } from "react";
import Logo from "./Logo";
import MobileMenuTrigger from "./MobileMenuTrigger";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <header className='w-full shadow-md dark:glow mb-2 z-30'>
      <nav className='flex flex-col md:flex-row sm:justify-between items-center py-5 px-[5vw] mx-auto text-foreground brightness-110 bg-overlay backdrop-blur-sm'>
        <Logo />
        <NavLinks clicked={clicked} />
        <div className='flex justify-center items-center'>
          <SocialLinks />
          <ModeToggle />
        </div>
        <MobileMenuTrigger clicked={clicked} setClicked={setClicked} />
      </nav>
    </header>
  );
}
export default Navbar;
