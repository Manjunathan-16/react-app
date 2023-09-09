interface Props {
  children: String;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
