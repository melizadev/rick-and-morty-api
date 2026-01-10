import useNavbar from "./hooks/useNavbar";
import MobileNav from "./MobileNav.jsx/MobileNav";
import DesktopNav from "./desktopNav/DesktopNav";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
const Navbar = () => {
  const { isOpen, setIsOpen, handleLinkClick } = useNavbar();
  return (
    <header className="w-full h-21 flex items-center justify-center relative p-4">
      <nav
        className="container h-full flex items-center justify-between bg-white text-white"
        aria-label="Main navigation"
      >
        <Logo />
        <DesktopNav />
        <BurgerButton setIsOpen={setIsOpen} isOpen={isOpen} />

        {isOpen && (
          <MobileNav
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleLinkClick={handleLinkClick}
          />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
