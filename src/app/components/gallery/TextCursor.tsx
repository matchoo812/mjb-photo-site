"use client";

import { useEffect, useState } from "react";

function TextCursor({ text }: { text: string }) {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      setPosition({ left: e.pageX, top: e.pageY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className='absolute pointer-events-none text-lg w-max h-max p-1 rounded backdrop-blur-sm z-50'
      style={{ left: position.left, top: position.top }}>
      {text}
    </div>
  );
}

export default TextCursor;
