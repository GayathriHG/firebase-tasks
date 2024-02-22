import { PropTypes } from "prop-types";

const FormInput = ({ type, placeholder,name,error, label,register}) => {
  return (
    <>
      <div>
        <label className="text-[#fefae0]">{label}</label>
        <br />
        <input
          type={type}
          // id={id}
          className="px-2 py-2 rounded mt-2 mb-4 w-full outline-none"
          {...register}
          placeholder={placeholder}
          name={name}

        />
              {error && <small className="text-orange-500">{error.message}</small>}

      </div>
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  error:PropTypes.object,
};

export default FormInput;
