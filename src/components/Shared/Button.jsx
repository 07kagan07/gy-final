const Button = ({
  type="button",
  children,
  isReverse = false,
  isIconExist = false,
  handleClick,
  size = "L",
  disabled = false,
  rounded = "3",
}) => {
  return (
    <button
    type={type}
      disabled={disabled}
      className={`${
        isReverse && "flex-row-reverse"
      } btn btn-primary d-flex align-items-center gap-3 ${
        size === "L" ? "py-2 px-4" : "py-1 px-3"
      } rounded-${rounded}`}
      onClick={handleClick}
    >
      {children}
      {isIconExist && (
        <i
          style={{ color: disabled ? "#667479" : "white" }}
          className="fa fa-chevron-right"
        ></i>
      )}
    </button>
  );
};

export default Button;
