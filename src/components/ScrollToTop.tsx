import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating to a hash, let the browser handle it
    if (location.hash) return;
    // Instant scroll to top to avoid footer-jump/jank
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;