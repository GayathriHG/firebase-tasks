import { PropTypes } from "prop-types";

const TextArea = ({ type, placeholder,label,name,error,register}) => {
  return (
    <>
     <div>
     <label className="text-[#fefae0]">{label}</label>

<textarea
  className="w-full px-4 py-1 rounded mt-1 outline-none "
  
  type={type}
  // id={id}
  cols="30"
  rows="4"
  placeholder={placeholder}
  name={name}
  {...register}
></textarea>
{error && <small className="text-orange-500">{error.message}</small>}

     </div>
    </>
  );
};

TextArea.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  error:PropTypes.object,

};

export default TextArea;
