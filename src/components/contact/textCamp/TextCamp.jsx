import "./TextCamp.css";

export const TextCamp = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  inputMode,
  pattern,
  required = false,
}) => {
  return (
    <div className="input-box">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        type={type}
        name={name}
        className="field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};
