/* eslint-disable react/prop-types */

const Button = ({
  children,
  isReverse = false,
  isIconExist = false,
  handleClick,
  size = "L",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${
        isReverse && "flex-row-reverse"
      } btn btn-primary d-flex align-items-center gap-3 ${
        size === "L" ? "py-3 px-4" : "py-2 px-2"
      } rounded-5`}
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
