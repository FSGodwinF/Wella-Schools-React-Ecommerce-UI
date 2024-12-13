import Slider from "../components/Slider"
import ProductList from "../components/ProductList"

const HomePage = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center gap-5">
      <Slider/>
      <ProductList/>
    </div>
  )
}

export default HomePage