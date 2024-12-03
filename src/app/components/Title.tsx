function Title({ text, isGallery }: { text: string; isGallery?: boolean }) {
  return (
    <div
      className={`title z-10 ${
        isGallery
          ? "absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2"
          : "relative"
      }`}>
      <h2 className='text-2xl text-center w-max my-3 mx-auto p-3 border-2 border-foreground bg-overlay backdrop-blur-sm drop-shadow-light select-none uppercase dark:text-glow-yellow dark:drop-shadow-glowYellow'>
        {text}
      </h2>
    </div>
  );
}
export default Title;
