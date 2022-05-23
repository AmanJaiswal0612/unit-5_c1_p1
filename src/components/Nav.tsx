import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Nav() {

 const count:any= useSelector<any>((state)=>state.count)
   const navigate= useNavigate()
  return (
    <div className="nav">
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus" onClick={()=>{
        navigate("/checkout")
      }}>
        Cart:{" "}
        <span className="navCartCount">{/* total items in cart here */}{count}</span>
        <button className="navCartCheckout">Checkout</button>
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
