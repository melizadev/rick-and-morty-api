import LogoImg from "../../../assets/logo.avif";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <Link
      to="/rick-and-morty-api/"
      aria-label="Go to home"
      onClick={handleClick}
    >
      <img
        src={LogoImg}
        alt="Rick and Morty API logo"
        className="w-[180px] jello-horizontal"
      />
    </Link>
  );
};
Logo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Logo;
