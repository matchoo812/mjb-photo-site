import Link from "next/link";

function Logo() {
  // TODO: Change glow/shadow based on dark/light mode - add animation?
  return (
    <Link
      href='/'
      className='text-3xl uppercase tracking-wider border-[3px] border-foreground py-1 px-4 select-none cursor-pointer hover:glow duration-300'>
      <h1>Matt Ballard</h1>
    </Link>
  );
}
export default Logo;
