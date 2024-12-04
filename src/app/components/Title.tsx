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
      className={`title z-10 ${
        isGallery
          ? "absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2"
          : "relative"
      }`}>
      <h2
        className={`text-2xl text-center tracking-wide w-max my-3 mx-auto p-3 border-2 border-foreground backdrop-blur-sm select-none uppercase drop-shadow-light dark:text-glow-yellow dark:drop-shadow-glowYellow dark:bg-overlay ${
          isOverlay && "bg-overlay"
        }`}>
        {text}
      </h2>
    </div>
  );
}
export default Title;
