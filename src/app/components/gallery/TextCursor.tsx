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
    <div className='text-cursor' style={{ left: position.left, top: position.top }}>
      {text}
    </div>
  );
}

export default TextCursor;
