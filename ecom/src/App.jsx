import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"



const App = () => {
  return (
    <div>
    <Home/>
    <Announcement/>
    <Slider/>
    <ProductList/>
    </div>
  )
}

export default App
