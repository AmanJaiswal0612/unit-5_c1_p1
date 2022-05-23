import { ADD_DATA } from "./action";



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

let initState:Initailprop|any= {
    products:[]
}

type Actionprop={
    type:string,
    payload:payProp
}

const reducer= (state=initState,{type,payload}:Actionprop)=>{
    switch(type){
        case ADD_DATA:{
            return{...state,products:payload}
        }
        default: return state
    }
}



export default reducer