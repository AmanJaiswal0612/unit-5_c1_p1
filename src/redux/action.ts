

export const ADD_DATA= "ADD_DATA";

type review={
    by:string;
    review:string
}

type payProp={
    id: number;
    product_name: string,
    rating: number,
    price: number,
    category: string,
    desc:string,
    reviews:review[]
}

export const addData= (pay:payProp)=>{
    return{
        type:ADD_DATA,
        pay,
    }

}

type retadd={
    type:string;
    pay:payProp[]
}

type addData= ()=>retadd



export const getdata= () => (dispatch:any) =>{
   
    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>{
        
        dispatch(addData(res))})
    
}