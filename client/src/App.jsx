import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Router, navigate} from "@reach/router"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from "./Components/Form";
import List from "./Components/List";
import Details from "./Components/Details";
function App() {
  const [errors,setErrors]= useState({})
  const [list, setList] = useState([])
  const [selectedProduct,setSelectedProduct]=useState("")
  const [somethingChanged,setSomethingChanged]=useState(false)
  // Get All function
  useEffect (() =>{
    fetchProduct ()
  },[]);

  const fetchProduct = () => {
    axios.get ("http://localhost:8000/api/products")
    .then (res => {
      setList(res.data);
    })
    .catch (err=>console.log(err));
  }

  // Post function
  const newProduct = e =>{ 
    console.log(e)
    axios.post('http://localhost:8000/api/products/new',e)
      .then(res=>{
        res.data.errors?
        setErrors(res.data.errors)
        :
        fetchProduct()
        navigate("/")
      })
      .catch(err=>console.log("connection error",err));  
  }
  // Detele function
  const deleteProduct = e =>{
    axios.delete(`http://localhost:8000/api/products/delete/${e}`)
    .then(res=>{
      res.data.errors?
      setErrors(res.data.errors)
      :
      setSomethingChanged(true);
    })
    .catch(err=>console.log("connection error",err)); 
  }
  
  // Put function
  const updateProduct = (e,id) =>{
    console.log(e)
    axios.put(`http://localhost:8000/api/products/edit/${id}`,e)
      .then(res=>{
        res.data.errors?
        setErrors(res.data.errors)
        :
        fetchProduct();
      })
      .catch(err=>console.log("connection error",err));  
  }

  return (
    <>
    <div className="container">
      <h1>Product Manager</h1>
      <Form toAxiosCreate={newProduct} fetch={fetchProduct} errors={errors} select={selectedProduct} toAxiosUpdate={updateProduct}/>
      <Router className="routebox">
        <List list={list} path="/" toAxiosDelete={deleteProduct}/>
        <Details path="/products/:id" edit={setSelectedProduct}/>
      </Router>
    </div>
    </>
  );
}

export default App;
