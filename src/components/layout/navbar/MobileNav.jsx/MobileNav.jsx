import { Link } from "react-router-dom";
const MobileNav = ({ setIsOpen, handleLinkClick }) => {
  return (
    <div
      className="gap-2 flex flex-col text-lg text-neutral-800 font-fredoka absolute right-0 top-[12vh] p-4 rounded-b-md bg-gray-50"
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
  );
};

export default MobileNav;
