import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [pageWidth, setPageWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize({ currentTarget: { innerWidth } }) {
    setPageWidth(innerWidth);
  }

  return { pageWidth };
}
