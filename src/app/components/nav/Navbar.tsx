import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { ModeToggle } from "./ModeToggle";
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <header className='w-full shadow-md dark:glow mb-2'>
      <nav className='flex flex-col md:flex-row sm:justify-between items-center py-5 w-11/12 max-w-[1500px] mx-auto text-foreground bg-transparent'>
        <Logo />
        <NavLinks />
        <div className='flex justify-center items-center'>
          <SocialLinks />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
