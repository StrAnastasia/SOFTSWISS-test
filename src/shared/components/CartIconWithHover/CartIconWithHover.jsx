import { ColoredCart, WhiteCart } from "../../icons";
import "./CartIconWithHover.scss";

const CartIconWithHover = () => {
  return (
    <div className="cart-icon-with-hover">
      <WhiteCart className="base-icon" />
      <ColoredCart className="hover-icon" />
    </div>
  );
};

export default CartIconWithHover;
