import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, getdata } from "../redux/action";


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

type Initailprop={
  products:payProp[]
}

type acProp={
  type:string,
  payload:payProp[]
}

function Body() {

  const [value,setvalue]= useState<payProp[]>([])


  
  
  useEffect(()=>{
    gdata();
  })

  const dispatch:any= useDispatch();
  const gdata= async ()=>{
    let res = await fetch(`http://localhost:8080/products`)
    let data= await res.json();
    setvalue(data)
  }


  


//  useEffect(()=>{
//    dispatch(getdata())
//  },[])

 const data= useSelector((state:Initailprop)=>state.products)

  return (
    <div className="container" style={{display:"grid",gridTemplateColumns:"auto auto auto"}} >
      {/* Iterate over data and show `Card` here */}
      
      {value.map((el)=>{
        return  <div className="item" key={el.id}  >
        <img src="https://avatars.githubusercontent.com/u/98823458?v=4" className="productImage" />
        <span>
          <Link className="productLink" to={`/${el.id}`}>
            {/* Product Name */}
            {el.product_name}
          </Link>
        </span>
        <span className="productCategory"></span>
        {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
        <span className="productPrice">${el.price}</span>
        {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
        <span className="productRating">Ratings: {el.rating} </span>
        {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
        {/*
        <div className="itemInCart">Item Already in cart</div> 
         OR
        <button className="productAddtoCart">
          Add to cart
        </button>
        */}
      </div>
      })}
    </div>
  );
}

export { Body };
