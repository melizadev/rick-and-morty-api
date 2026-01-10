import { useState } from "react";
const ProgressiveBackground = ({
  lowSrc,
  src,
  alt = "",
  position = "object-center",
  className = "",
  overlay = false,
  children,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={lowSrc}
        alt={alt}
        aria-hidden
        className={`
          absolute inset-0 w-full h-full
          object-cover ${position}
          scale-105 blur-xl
        `}
      />

      {/* Img full */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
        className={`
          absolute inset-0 w-full h-full
          object-cover ${position}
          transition-opacity duration-700 ease-out
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {overlay && <div className="absolute inset-0 bg-black/20 z-[1]" />}

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default ProgressiveBackground;
