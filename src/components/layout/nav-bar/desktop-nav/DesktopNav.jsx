import { Link } from "react-router-dom";
const DesktopNav = () => {
  return (
    <>
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
    </>
  );
};

export default DesktopNav;
