import { useState, useEffect } from "react";
import { throttle } from "lodash";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = throttle((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  },50);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
