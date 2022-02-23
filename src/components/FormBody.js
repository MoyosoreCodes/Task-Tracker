import PropTypes from "prop-types";

const FormBody = ({ text, type, placeholder, formValue, onChange }) => {
  return (
    <div
      className={`form-control ${
        type === "checkbox" ? "form-control-check" : ""
      }`}
    >
      <label> {text} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={formValue}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

FormBody.defaultProps = {
  text: "No Label entered",
  type: "text",
};

FormBody.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormBody;
