import spaceshipImg from "../../shared/images/Vectary texture.svg"
import "./Footer.scss";

const Footer = () => (
  <footer className="footer__wrap">
    <img alt='spaceship' src={spaceshipImg} width='93px' height='81px' loading="lazy" />
    <p>Exciting space adventure!</p>
  </footer>
);

export default Footer;
