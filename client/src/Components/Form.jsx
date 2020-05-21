import React,{useState} from "react"

const Form = props => {
  const errors= props.errors
  const [title,setTitle]= useState("");
  const [price,setPrice]= useState(1);
  const [desc,setDesc]= useState("");
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
    props.toAxios(product)
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
      <button className="btn btn-dark" type="submit">Create</button>
    </form>
  );
}

export default Form