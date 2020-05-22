import React,{useState,useEffect} from "react";
import {Link} from "@reach/router";
import axios from "axios";
const Details = props =>{
  const api = `http://localhost:8000/api/products/${props.id}`
  const [details,setDetails]=useState({})
  useEffect(()=>{
    axios.get(api)
      .then(res =>setDetails(res.data))
      .catch(err=> console.log(err))
  },[api])
  return(
    <div className="container">
      <h2>{details.title}</h2>
      <p>Price: ${details.price}</p>
      <p>Description: {details.desc}</p>
      <Link className="btn btn-dark" to="/"> Back</Link>
    </div>
  )
}

export default Details