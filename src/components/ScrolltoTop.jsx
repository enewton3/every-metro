//from react router docs https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
