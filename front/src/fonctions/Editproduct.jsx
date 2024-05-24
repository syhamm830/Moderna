// import { useState } from "react";
// import { toast } from "react-toastify";
// export default function Editproduct({setLoading}) {
//     let [title,setTitle] = useState("");
//     let [price,setprice]= useState("");
//     let [image,setImage] = useState("");
//     let [description,setdescription] =useState("")
//     let {id}  = useParams();
//     function editproduct(e){
//         e.preventDefault()
//         let newproduct = {title,price,image,description}
//         fetch("http://localhost:8001/products/"+id,{
//             method:"PUT",
//             // headers: {
//                 "description-type":"application/json",
//             },
//             body : JSON.stringify(newproduct)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.message){
//                 toast.error(data.message)
//             }else{
//                 toast.success("Created a new product "+title);
//                 setprice("")
//                 setdescription("")
//                 setImage("")
//                 setTitle("")
//                 setLoading(true)
//             }
//         })
        
         
//     }

//     useEffect(()=>{
//       fetch("http://localhost:8001/products/"+id)
//       .then(res=>res.json())
//       .then(data=>{
//         setTitle(data.title);
//         setprice(data.price)
//         setImage(data.image)
//         setdescription(data.description)
//       })
//     },[])
//   return (
//     <div>
//       <form>
      
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={title}
//             onChange={(e)=>setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="price">price:</label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={price}
//             onChange={(e)=>setprice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={image}
//             onChange={(e)=>setImage(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={description}
//             onChange={(e)=>setdescription(e.target.value)}
//           />
//         </div>
//         <button type="submit" onClick={editproduct}>Submit</button>
//       </form> 
//     </div>
//   );
// }