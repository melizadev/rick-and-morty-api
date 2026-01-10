import LogoImg from "../../../assets/logo.avif";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/rick-and-morty-api/" aria-label="Go to home">
      <img
        src={LogoImg}
        alt="Rick and Morty API logo"
        className="w-[180px] jello-horizontal"
      />
    </Link>
  );
};

export default Logo;
