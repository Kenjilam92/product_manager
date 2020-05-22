import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Router, Link, navigate} from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from "./Components/Form";
import List from "./Components/List";
import Details from "./Components/Details";
function App() {
  const [errors,setErrors]= useState({})
  const [list, setList] = useState([])
  const productApi = `http://localhost:8000/api/products`
  // Post function
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
  const deleteProduct = e =>{}
  
  // Get All function
  
  useEffect (() =>{
    axios.get (productApi)
      .then (res => {
        setList(res.data);
      })
      .catch (err=>console.log(err));
  },[productApi]);

  
  

  return (
    <>
    <div className="container">
      <h1>Product Manager</h1>
      <Form toAxios={newProduct} errors={errors}/>
      <Router className="routebox">
        <List list={list} path="/" toAxiosDelete={deleteProduct}/>
        <Details path="/products/:id"/>
      </Router>
    </div>
    </>
  );
}

export default App;
