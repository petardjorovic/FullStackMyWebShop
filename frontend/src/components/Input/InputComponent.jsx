import React from "react";

function InputComponent({
  id,
  placeholder,
  type,
  onChange,
  inputColor,
  defaultValue,
  className,
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={{ border: inputColor ? "1px solid red" : "" }}
        defaultValue={defaultValue}
        className={className}
      />
    </>
  );
}

export default InputComponent;
