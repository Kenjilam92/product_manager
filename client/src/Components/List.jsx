import React from "react";
import {navigate} from "@reach/router";
// import axios from "axios";
const List = props => {
  const list= props.list;
  return(
      <table className="table table-bordered">
      <thead className="thead-dark">
        <tr> 
          <th>Id</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map( (product,i) =>
        <tr key={i}>
          <td>{i+1}</td>
          <td>{product.title}</td>
          <td><div className="btn-group rm-2">
            <button className="btn btn-primary btn-sm" onClick={e=>navigate(`/products/${product._id}`)}> Details </button>
            <button className="btn btn-danger btn-sm" onClick={e=>props.toAxiosDelete(product._id)}> Delete </button>
          </div></td>
        </tr>
        )}
      </tbody>
    </table>
  );
}
export default List;