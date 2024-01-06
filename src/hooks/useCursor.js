import { useCallback, useEffect, useState } from "react";

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = useCallback((mouseEvent) => {
    setMousePosition({
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
    });
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return mousePosition;
};
