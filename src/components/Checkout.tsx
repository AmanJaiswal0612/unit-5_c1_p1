import { useSelector } from "react-redux";


function Checkout() {

  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.
 
  // If cart is empty, show following div:

  const count:any= useSelector<any>((state)=>state.count)

  const cart:any= useSelector<any>((state)=>state.cart)
  if (count===0) {
    return <div className="emptyCart">Nothing in cart</div>;
  }
  

  

// else:
  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className="checkoutWrapper">
        {cart.map((el:any)=>{
          return <div className="checkoutItem">
          <span>{el.product_name}</span>
          <span>${el.price}</span>  
        </div>
        })}
      </div>
      <hr className="hr" />
      <div className="totalContainer">
        <span>Total:</span>
        <span className="total">
          {/* Show total here */}
          {cart.reduce((acc:number,el:any)=>{
             return acc+el.price; 
          },0)}
        </span>
      </div>
    </div>
  );
}

export { Checkout };
