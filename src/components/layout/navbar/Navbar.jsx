import Logo from "../../../assets/logo.avif";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
const Navbar = () => {
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

  const handleLinkClick = () => setIsOpen(false);
  return (
    <header className="w-full h-[15vh] flex items-center justify-center relative p-2">
      <nav
        className="container h-full flex items-center justify-between bg-white text-white"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link to="/rick-and-morty-api/">
            <img
              src={Logo}
              alt="Go to home page - Rick and Morty API"
              className="w-[240px] jello-horizontal"
            />
          </Link>
        </div>
        <div className="gap-4 text-lg text-neutral-800 font-fredoka hidden sm:flex md:flex lg:flex">
          <Link
            to="/rick-and-morty-api/characters"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Characters
          </Link>
          <Link
            to="/rick-and-morty-api/episodes"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Episodes
          </Link>
          <Link
            to="/rick-and-morty-api/locations"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Locations
          </Link>
        </div>
        <button
          className="text-3xl text-neutral-800 block sm:hidden cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu />
        </button>

        {isOpen && (
          <div
            className="gap-2 flex flex-col text-lg text-neutral-800 font-fredoka absolute right-0 top-[15vh] p-4 rounded-b-md bg-gray-50"
            id="movile-navbar"
            role="mobile-menu"
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link
              to="/rick-and-morty-api/characters"
              role="menuitem"
              onClick={handleLinkClick}
            >
              Characters
            </Link>
            <Link
              to="/rick-and-morty-api/episodes"
              role="menuitem"
              onClick={handleLinkClick}
            >
              Episodes
            </Link>
            <Link
              to="/rick-and-morty-api/locations"
              role="menuitem"
              onClick={handleLinkClick}
            >
              Locations
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
