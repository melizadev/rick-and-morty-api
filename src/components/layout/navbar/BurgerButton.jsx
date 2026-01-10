import { RxHamburgerMenu } from "react-icons/rx";

const BurgerButton = ({ setIsOpen, isOpen }) => {
  return (
    <button
      className="text-3xl text-neutral-800 block sm:hidden cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={() => setIsOpen(!isOpen)}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default BurgerButton;
