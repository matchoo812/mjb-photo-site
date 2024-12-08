"use client";

function MobileMenuTrigger({ clicked, setClicked }: { clicked: boolean }) {
  return (
    <button
      onClick={() => setClicked(!clicked)}
      className='flex flex-col z-20 justify-around w-10 h-10 p-1 fixed top-[1.7rem] right-7 cursor-pointer lg:hidden hover:drop-shadow-light dark:drop-shadow-glow dark:hover:drop-shadow-glowYellow duration-500'>
      <div
        className={`line ${
          clicked ? "-rotate-[405deg] -translate-x-1 translate-y-2" : ""
        }`}></div>
      <div className={`line ${clicked ? "opacity-0" : ""}`}></div>
      <div
        className={`line ${
          clicked ? "rotate-[405deg] -translate-x-1 -translate-y-3" : ""
        }`}></div>
    </button>
  );
}
export default MobileMenuTrigger;
