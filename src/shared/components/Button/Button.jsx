import "./Button.scss";

const Button = ({
  children,
  variant = "filled", // 'filled' | 'outlined' | 'ghost'
  className,
  ...props
}) => {
  return (
    <button className={`${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
