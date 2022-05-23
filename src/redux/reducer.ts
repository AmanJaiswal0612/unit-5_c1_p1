import { CardDetails } from "../components/CardDetails";
import { ADD_DATA, COUNT_PLUS } from "./action";



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
    products:payProp[];
    count?:number;
    cart:payProp[]
}

let initState:Initailprop|any= {
    products:[],
    count:0,
    cart:[]

}

type Actionprop={
    type:string,
    payload:payProp
}

const reducer= (state=initState,{type,payload}:any)=>{
    
    switch(type){
        case ADD_DATA:{
            console.log(payload)
            return{...state,products:payload}
        }
        case COUNT_PLUS:{
            return{...state,count:state.count+1,cart:[...state.cart,...payload]}
        }
        default: return state
    }
}



export default reducer