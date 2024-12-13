import Card from "./Card"
import asics from "../assets/images/asics-gt-1000-13.jpg";
import converse from "../assets/images/converse-chuck-taylor-all-star.jpg";
import jordanRed from "../assets/images/jordan-dunk-red.jpg";
import newBalance from "../assets/images/new-balance-237.jpg";
import nikeCyan from "../assets/images/nike-j1-cyan.jpg";
import nikeGreen from "../assets/images/nike-j1-gr.jpg";
import nikeLightBlue from "../assets/images/nike-j1-lightblue.jpg";
import nikeJordan4 from "../assets/images/nike-j4-black.jpg";
import vans from "../assets/images/vans-blu.jpg";
import yeezys from "../assets/images/yeezy-250.jpg";





const ProductList = () => {
  
    const data = [
        {
            id:1,
            img: asics,
            name: "Asics GT-1000 13",
            price: 20000
        },
        {
            id:2,
            img: converse,
            name: "Converse Chuck Taylor",
            price: 15000 
        },
        {
            id:3,
            img: jordanRed,
            name: "Air Jordan Dunk Lows Red",
            price: 23000
        },
        {
            id:4,
            img: newBalance,
            name: "New Balance 237",
            price: 23000
        },
        {
            id:5,
            img: nikeCyan,
            name: "Air Jordan 1 Cyan",
            price: 23000
        },
        {
            id:6,
            img: nikeGreen,
            name: "Air Jordan 1 Green",
            price: 23000
        },
        {
            id:7,
            img: nikeLightBlue,
            name: "Air Jordan 1 Light Blue",
            price: 23000
        },
        {
            id:8,
            img: nikeJordan4,
            name: "Air Jordan 4 Retro",
            price: 27500
        },
        {
            id:9,
            img: vans,
            name: "Vans - Off The Wall Blue",
            price: 10000
        },
        {
            id:10,
            img: yeezys,
            name: "Yeezy Boost 350 V2 Orange",
            price: 15000
        }
    ]

    return (
    <div>
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1 className="fw-bold text-dark">Featured Products</h1>
            <p className="fst-italic">My Closet&apos;s Best... Grab Them First!!</p>
        </div>
        <div className="container-fluid">
            <div className="row">
                {data.map(item=>(
                    <div key={item.id} className="col-12 col-md-6 mb-3">
                        <Card item={item} />   
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductList