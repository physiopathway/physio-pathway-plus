import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AdSenseAdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSenseAd = ({ 
  slot, 
  format = "auto", 
  responsive = true,
  style = { display: "block" },
  className = ""
}: AdSenseAdProps) => {
  const location = useLocation();
  
  // Don't show ads on these pages (as per AdSense compliance)
  const excludedPages = [
    '/privacy-policy',
    '/privacy',
    '/terms-of-service', 
    '/terms',
    '/disclaimer',
    '/contact',
    '/accessibility'
  ];

  const isExcluded = excludedPages.some(page => location.pathname.includes(page));

  useEffect(() => {
    if (!isExcluded) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [location.pathname, isExcluded]);

  if (isExcluded) {
    return null;
  }

  return (
    <div className={`adsense-container my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5658341120378432"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSenseAd;