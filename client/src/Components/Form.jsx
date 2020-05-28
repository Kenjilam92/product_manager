import React,{useState,useEffect} from "react"
import axios from "axios"
const Form = props => {
  const errors= props.errors
  const [title,setTitle]= useState("");
  const [price,setPrice]= useState(1);
  const [desc,setDesc]= useState("");
  // const [update,setUpdate]=useState({})
  useEffect (()=>{
    console.log(props.select)
    axios.get(`http://localhost:8000/api/products/${props.select}`)
      .then (res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDesc(res.data.description);
      })
      .catch (err=>console.log(err))  
  },[props.select])

  const handleSubmit = e =>{
    e.preventDefault()
    const product = {
      title: title,
      price: price,
      description: desc
    }
    setTitle("")
    setPrice(1)
    setDesc("")
    if (props.select){
      props.toAxiosUpdate(product,props.select)
    }
    else {
      props.toAxiosCreate(product)
    }
  }
  return(
    <form className="createProduct" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          value={title}
          onChange={e=>setTitle(e.target.value)}
          placeholder={errors.title? errors.title.message : null}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input 
          type="number"
          value={price}
          min={0}
          onChange={e=>setPrice(e.target.value)}
        />
      </div>
      {errors.price? <p className="text-danger"> {errors.price.message} </p> : null}
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input 
          type="text"
          value={desc}
          onChange={e=>setDesc(e.target.value)}
          placeholder={errors.description? errors.description.message : null}
        />
      </div>
      <button className="btn btn-dark" type="submit">{props.select? "Update": "Create"}</button>
    </form>
  );
}

export default Form