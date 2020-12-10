//from react router docs https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
