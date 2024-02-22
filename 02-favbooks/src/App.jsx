import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput";
import TextArea from "./components/TextArea";
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import { useEffect, useState } from "react";
import {collection, getDocs,addDoc} from "firebase/firestore";
import { db } from "./firebase";



const formSchema=z.object({
  name:z.string().min(4).max(20),
  book:z.string().min(4).max(120),
  genre:z.string().min(4).max(20),
  desc:z.string().min(10).max(500),
})
const App=()=> {
  const { register,handleSubmit,formState:{errors},
  reset,
 } = useForm({
   defaultValues:{},
   resolver:zodResolver(formSchema),
  });

  const [books,setBooks]=useState([])

  const COLLECTION_NAME="books"
const sendThisToServer=async(data)=>{
  try{
    const docRef=await addDoc(collection(db,COLLECTION_NAME),data);
    console.log("doc id:",docRef.id);
    alert("Thank you for your contribution❤️")
  }catch(e){
    console.error("error doc:",e);
   
  }
  
  // every data should pass

reset();
  // console.log(data);
};

useEffect(()=>{
//fetch data from server
async function getDataFromFirebase(){
  const querySnapshot=await getDocs(collection(db,COLLECTION_NAME));

  setBooks(querySnapshot.docs.map((doc)=>doc.data()));
  // console.log(querySnapshot.docs[0].data());
  // querySnapshot.forEach((doc)=>{
  //   console.log(`${doc.id}=>${doc.data()}`,doc.data());
  // });
  if(querySnapshot.docs.length===0){
    console.log("no data!");
  }
}

getDataFromFirebase();
},[]);

  return (

    <>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg"
          className=" w-full object-fill opacity-50 "
          alt="bg-img"
        />
      </div>
      <div className="absolute  top-60 right-40 w-full ">
        <form onSubmit={handleSubmit(sendThisToServer)} className="bg-[#606c38]  max-w-4xl mx-auto p-4 mt-4 rounded font-mono  text-xl "  >
          <FormInput
            placeholder="Enter your name"
            label="Your Name"
            type="text"
            name="name"
            // id="name"
            register={register("name")}
            error={errors.name}
          />

          <FormInput
            placeholder="Enter your name"
            label="Book Name"
            type="text"
            name="book"
            // id="book"
            register={register("book")}
            error={errors.book}
          />

          <FormInput
            placeholder="Enter your name"
            label="Book Genre"
            type="text"
            name="genre"
            // id="genre"
            register={register("genre")}
            error={errors.genre}
          />

          <TextArea
            placeholder="Description"
            label="Book Description"
            name="desc"
            type="text"
            // id="desc"
            register={register("desc")}
            error={errors.desc}
          />

          <FormInput
            placeholder="Enter your name"
            label="Upload pdf / image"
            type="file"
            name="file"
            
            // id="file"
            register={register("file")}
          />

          <button className="bg-[#fefae0] text-[#283618]  hover:bg-[#283618] px-4 py-2 rounded hover:text-[#fefae0] cursor-pointer">
            Upload your fav book !
          </button>
        </form>
      </div>

      {/* Output Display */}
      <section>
      {/* {JSON.stringify(books)} */}
     
      <table className="max-w-8xl mx-auto mb-10">
        
        <tbody >
          <tr className="bg-[#283618]  text-[#fefae0] ">
          <th className="px-4 py-3  border-2">Sl.no</th>
            <th className="px-10 py-3  border-2">Name</th>
            <th className="px-10 py-3 border-2">Name of the Book</th>
            <th className="px-10 py-3 border-2 ">Genre</th>
            <th className="px-10 py-3 border-2">Description</th>
            <th className="px-10 py-3 border-2">Reference</th>
          </tr>
          {books.map((book,index)=>(
            <tr className="bg-[#606c38] text-[#fefae0] " key={index}>
               <td className="px-4 py-2 border-2 text-center">{index+1}</td>
            <td className="px-10 py-2 border-2">{book.name}</td>
            <td className="px-10 py-2 border-2">{book.book}</td>
            <td className="px-10 py-2 border-2 ">{book.genre}</td>
            <td className="px-10 py-2 border-2">{book.desc}</td>
            <td className="px-10 py-2 border-2 rounded ">{book.file}</td>
          </tr>
          ))}
        </tbody>
        </table>
        </section>



    </>
  );
}

export default App;
