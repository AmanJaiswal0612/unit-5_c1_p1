import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

function CardDetails() {


 const {id}= useParams();
 
 const[sdata,setSdata]=useState<payProp>({})

useEffect(()=>{
 getInd()
},[])

const getInd= async ()=>{
  let res = await fetch(`http://localhost:8080/products/${id}`)
  let data= await res.json();
  setSdata(data)
}
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle">{sdata.product_name}</h4>
      </span>
      <img className="detailsImage" src="https://avatars.githubusercontent.com/u/98823458?v=4" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${sdata.price}</span>
      <span className="detailsPrice">{sdata.desc}</span>
      <div>
        <h5>Reviews:</h5>
        Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
       
      </div>
    </div>
  );
}
export { CardDetails };
