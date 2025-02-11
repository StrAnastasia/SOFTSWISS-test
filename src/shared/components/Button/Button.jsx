import "./Button.scss";

const Button = ({
  children,
  variant = "filled", // 'filled' | 'outlined' | 'ghost'
}) => {
  return <button className={variant}>{children}</button>;
};

export default Button;
