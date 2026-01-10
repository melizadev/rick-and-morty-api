import { useEffect, useState } from "react";
const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const escKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", escKey);
    return () => window.removeEventListener("keydown", escKey);
  }, []);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
    return;
  };
  return {
    handleLinkClick,
    isOpen,
    setIsOpen,
  };
};

export default useNavbar;
