const Link = ({ children, target = "", href = "/", className }) => {
  return (
    <a className={className} href={href} target={target}>
      {children}
    </a>
  );
};

export default Link;
