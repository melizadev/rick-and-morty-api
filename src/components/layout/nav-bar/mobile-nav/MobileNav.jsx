import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const MobileNav = ({ isOpen, setIsOpen, handleLinkClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="
            sm:hidden
            fixed w-full
            bg-white
            flex flex-col
            items-center
            justify-center
            gap-2
            text-xl
            p-4
          "
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

          <button
            onClick={() => setIsOpen(false)}
            className="text-sm text-gray-500 cursor-pointer"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default MobileNav;
