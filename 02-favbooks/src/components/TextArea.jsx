const TextArea = ({ type, placeholder, label, id }) => {
  return (
    <>
      <label>{label}</label>

      <textarea
        className="w-full px-4 py-1 rounded mt-1 outline-none"
        type={type}
        id={id}
        cols="30"
        rows="4"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
