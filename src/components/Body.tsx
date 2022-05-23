import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, getdata } from "../redux/action";
import { Card } from "./Card";


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
  const dispatch= useDispatch<any>();
 useEffect(()=>{
   dispatch(getdata())
 },[])

 const data:any= useSelector<any>((state:Initailprop)=>state.products)
//  console.log(data)
  return (
    <div className="container" style={{display:"grid",gridTemplateColumns:"auto auto auto"}} >
      {/* Iterate over data and show `Card` here */}
      
      {data?data.map((el:any)=>{
        return  <Card key={el.id} {...el}/>
      }):null}
    </div>
  );
}

export { Body };
