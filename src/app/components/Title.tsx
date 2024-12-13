function Title({
  text,
  isGallery,
  isOverlay,
}: {
  text: string;
  isGallery?: boolean;
  isOverlay?: boolean;
}) {
  return (
    <div
      className={`title z-10 relative ${
        isGallery
          ? "translate-y-28 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-3/4 md:-translate-x-1/2"
          : ""
      }`}>
      <h2
        className={`text-xl sm:text-2xl text-center tracking-wide w-max my-3 mx-auto p-3 border-2 border-foreground backdrop-blur-sm select-none uppercase dark:text-glow-yellow dark:drop-shadow-glowYellow ${
          isOverlay && "bg-overlay"
        }`}>
        {text}
      </h2>
    </div>
  );
}
export default Title;
