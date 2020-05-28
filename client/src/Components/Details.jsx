import React,{useState,useEffect} from "react";
import {navigate} from "@reach/router";
import axios from "axios";
const Details = props =>{
  const [details,setDetails]=useState({})
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${props.id}`)
      .then(res =>setDetails(res.data))
      .catch(err=> console.log(err))
  },[props.id])
  return(
    <div className="container">
      <h2>{details.title}</h2>
      <p>Price: ${details.price}</p>
      <p>Description: {details.description}</p>
      <div className="btn-group">
        <button className="btn btn-dark" onClick={e=>navigate("/")}> Back</button>
        <button className="btn btn-dark" onClick={e=>props.edit(details._id)}> Edit </button>
      </div>
    </div>
  )
}

export default Details