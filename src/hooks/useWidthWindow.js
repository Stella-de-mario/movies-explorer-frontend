import { useState, useEffect } from "react";

export default function useWidthWindow () {
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  function handleResizeWidth() {
    setIsWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWidth);
    handleResizeWidth();
    return () => window.removeEventListener('resize', handleResizeWidth);
  }, []);
  return isWidth;
}