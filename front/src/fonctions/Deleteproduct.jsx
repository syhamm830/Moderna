import { useState } from "react";
import { toast } from "react-toastify";
export default async function Deleteproduct(id){
    try{
      let res = await fetch("http://localhost:8001/products/"+id,{method:"DELETE"});
      let data = await res.json()
      toast.success("element deleted! ")
      console.log(data)
      setLoading(true)
    }catch(e){
      toast.error("error while deleting")
      console.log(e)
    }
    
   }
  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Image</th>
            <th>Content</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.length == 0
            ? "No products"
            : products?.map((product) => (
                <tr key={product.key}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.content}</td>
                  <td>{product.author}</td>
                  <td><img width="200px" src={product.image} /></td>
                  <td>{product.createdAt}</td>
                  <td>
                    <Link to={`products/edit/${product._id}`}><button>Update</button></Link>
                  </td>
                  <td>
                    <button onClick = {()=>deleteproduct(product._id)} style={{background:"red"}}>Delete</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table> */}
    </div>
  );
