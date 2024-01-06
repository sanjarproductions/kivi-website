import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return scroll;
};
