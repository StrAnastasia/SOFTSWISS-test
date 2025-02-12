import { ColoredCart, WhiteCart } from "../../icons";
import "./CartIconWithHover.scss";

const CartIconWithHover = () => {
  return (
    <div className="cart-icon-with-hover">
      <WhiteCart className="cart-icon-with-hover__base-icon" />
      <ColoredCart className="cart-icon-with-hover__hover-icon" />
    </div>
  );
};

export default CartIconWithHover;
