import useNavbar from "./hooks/useNavbar";
import DesktopNav from "./desktop-nav/DesktopNav";
import MobileNav from "./mobile-nav/MobileNav";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";

const Navbar = () => {
  const { isOpen, setIsOpen, handleLinkClick } = useNavbar();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 h-21">
        <Logo setIsOpen={setIsOpen} isOpen={isOpen} />

        <DesktopNav />

        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>

      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLinkClick={handleLinkClick}
      />
    </header>
  );
};

export default Navbar;
