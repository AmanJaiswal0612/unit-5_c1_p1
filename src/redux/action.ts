

export const ADD_DATA= "ADD_DATA";

export const COUNT_PLUS= "COUNT_PLUS"

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

export const addData= (payload:any)=>{
    return{
        type:ADD_DATA,
        payload,
    }

}

export const countplus=(payload:any)=>{
    return{
        type:COUNT_PLUS,
        payload
    }
}

type retadd={
    type:string;
    pay:payProp[]
}

type addData= ()=>retadd



export const getdata: ()=>void= () => (dispatch:any) =>{
   
    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        dispatch(addData(res))})
}