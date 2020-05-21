import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from "./Components/Form"
function App() {
  const [errors,setErrors]= useState({})
  const newProduct = e =>{ 
    console.log(e)
    axios.post('http://localhost:8000/api/products/new',e)
      .then(res=>{
        res.data.errors?
        setErrors(res.data.errors)
        :
        navigate("/");
      })
      .catch(err=>console.log("connection error",err));  
  }
  return (
    <>
    <div className="container">
      <h1>Product Manager</h1>
      <Form toAxios={newProduct} errors={errors}/>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr> 
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
      </table>
    </div>
    </>
  );
}

export default App;
