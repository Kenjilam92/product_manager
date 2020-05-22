import React from "react";
import {Link} from "@reach/router";
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
          <td><nav>
            <Link to= {`/products/${product._id}`} >Details </Link> 
            <Link to= {`/products/edit/${product._id}`} > Edit </Link>  
            <Link to= {`/products/delete/${product._id}`} > Delete </Link>
            </nav></td>
        </tr>
        )}
      </tbody>
    </table>
  );
}
export default List;