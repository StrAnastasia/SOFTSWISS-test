import { Link } from "../../shared/components";
import { Logo } from "../../shared/icons";
import { CartButton } from "../../features";
import "./Navbar.scss";

const HEADER_LINKS = ["Home", "Products"];

const Navbar = () => (
  <header className="navbar-wrap">
    <Logo />
    <div className="right-half">
      {HEADER_LINKS.map((label) => (
        <Link key={label}>{label}</Link>
      ))}
      <CartButton />
    </div>
  </header>
);

export default Navbar;
