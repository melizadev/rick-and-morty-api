import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";
const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="text-3xl text-neutral-800 sm:hidden cursor-pointer"
    >
      <RxHamburgerMenu />
    </button>
  );
};
BurgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BurgerButton;
