import { Link } from "../../shared/components";
import { Logo } from "../../shared/icons";
import { CartButton, MobileMenu } from "../../features";
import "./Navbar.scss";

const HEADER_LINKS = ["Home", "Products"];

const Navbar = () => (
  <header className="navbar__wrapper">
    <div className="page__content_margined-section">
      <a href="/">
        <Logo />
      </a>
      <div className="navbar__links">
        {HEADER_LINKS.map((label) => (
          <Link key={label}>{label}</Link>
        ))}
        <CartButton />
      </div>
      <MobileMenu links={HEADER_LINKS} />
    </div>
  </header>
);

export default Navbar;
