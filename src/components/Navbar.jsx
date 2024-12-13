import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useContext } from "react"
import { cartContext } from "../context"
const Navbar = () => {
    const {state} = useContext(cartContext);
    
    
    const totalItems = Object.values(state.cart).reduce(
        (total, item) => total + item.qty,
        0
    );
    return (
    <div className="d-flex justify-content-between align-items-center py-3 px-2 sticky-top bg-white">
        <div>
            <Link className="text-decoration-none text-dark fs-1" to="/"><HomeIcon/></Link>
        </div>
        <div>
            <h1 className="fs-1 text-dark fw-bold">TheFGEEshop</h1>
        </div>
        <div className="position-relative">
            <Link className="text-decoration-none text-dark fs-4" to="/cart">
                <ShoppingCartIcon/>
            </Link>
            <span className="text-white bg-primary position-absolute d-flex align-items-center justify-content-center" style={{borderRadius:"50%", padding: "2px", right:"-3px", top:"-3px", fontSize:"12px"}}>
                {totalItems || "0"}
            </span> 
        </div>
    </div>
  )
}

export default Navbar