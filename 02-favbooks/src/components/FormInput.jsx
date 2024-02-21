import { PropTypes } from "prop-types";

const FormInput = ({ type, placeholder, label }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <br />
        <input
          type={type}
          className="px-4 py-1 rounded mt-1 w-full outline-none"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
