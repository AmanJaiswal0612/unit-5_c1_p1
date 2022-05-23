import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countplus } from "../redux/action";

type review={
  by:string;
  review:string
}

type payProp={
  id?: number;
  product_name?: string,
  rating?: number,
  price?: number,
  category?: string,
  desc?:string,
  reviews?:review[]
}


type cardProp={
  d:payProp[]
}

function Card({id,category,desc,price,product_name,rating,reviews}:payProp) {
  const dispatch=useDispatch();
  const [cart,setCart]=useState<boolean>(false)
  return (
    <div className="item">
      <img src="https://tse2.mm.bing.net/th?q=Lappy+Fix&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className="productImage" />
      <span>
        <Link className="productLink" to={`/${id}`}>
          {/* Product Name */}
          {product_name}
        </Link>
      </span>
      <span className="productCategory">{category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings:{rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {!cart?<button  onClick={()=>{
        setCart(true);
        dispatch(countplus([{id,category,desc,price,product_name,rating,reviews}]))
      }} className="productAddtoCart">
        Add to cart
      </button>:<div className="itemInCart">Item Already in cart</div> }
    </div>
  );

  
}



export { Card };
