import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const InputField = ({ typeName, placeholder, label, isRequired = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState(typeName);

  const id = crypto.randomUUID();

  useEffect(() => {
    if (isVisible) {
      setInputType("text");
    } else {
      setInputType(typeName);
    }
  }, [isVisible, typeName]);

  return (
    <>
      <label className="mb-3" style={{ cursor: "pointer" }} htmlFor={id}>
        {label}
      </label>
      <div className="w-100 position-relative">
        <input
          type={inputType}
          placeholder={placeholder}
          required={isRequired}
          id={id}
          className="w-100 rounded"
          style={{ border: "1px solid #99A2A5", padding: "14px 28px" }}
        />
        {typeName === "password" && isVisible ? (
          <i
            className="fa-regular fa-eye position-absolute"
            style={{ right: "3%", top: "35%", cursor: "pointer" }}
            onClick={() => setIsVisible(!isVisible)}
          ></i>
        ) : (
          typeName === "password" && (
            <i
              className="fa-regular fa-eye-slash position-absolute"
              style={{ right: "3%", top: "35%", cursor: "pointer" }}
              onClick={() => setIsVisible(!isVisible)}
            ></i>
          )
        )}
      </div>
    </>
  );
};

export default InputField;
