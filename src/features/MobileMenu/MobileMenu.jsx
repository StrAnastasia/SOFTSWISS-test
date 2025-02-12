import { useCallback, useState } from "react";
import { Button, Link } from "../../shared/components";
import "./MobileMenu.scss";

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="mobile-menu">
      <Button
        onClick={changeIsOpen}
        variant="icon"
        className={`mobile-menu__button ${isOpen ? "is-open" : ''}`}
      >
        <span className="mobile-menu__button__icon"></span>
      </Button>
      <nav className={`mobile-menu__list ${isOpen && "isOpen"}`}>
        <ul>
          {links.map((title) => (
            <li>
              <Link>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
