import FormInput from "./components/FormInput";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      
        <div className="relative">
        <img src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg" className=" w-full object-fill " alt="bg-img" />
        </div>
      <div className="absolute  top-40 right-40 w-full ">
      <form className="bg-[#606c38] text-[#fefae0] max-w-4xl mx-auto p-4 mt-4 rounded font-mono ">
        <div className="mb-4">
          <FormInput
            placeholder="Enter your name"
            label="Your Name"
            type="text"
            id="name"
          />
        </div>

        <div className="mb-4">
          <FormInput
            placeholder="Enter your name"
            label="Book Name"
            type="text"
            id="book"
          />
        </div>

        <div className="mb-4">
          <FormInput
            placeholder="Enter your name"
            label="Book Genre"
            type="text"
            id="genre"
          />
        </div>

        <div className="mb-4">
          <TextArea
            placeholder="Description"
            label="Book Description"
            id="desc"
            type="text"
          />
        </div>

        <div className="mb-4">
          <FormInput
            placeholder="Enter your name"
            label="Upload pdf / image"
            type="file"
            id="file"
          />
        </div>

        <button>Upload your fav book !</button>
      </form>
      
      </div>
    </>
  );
}

export default App;
