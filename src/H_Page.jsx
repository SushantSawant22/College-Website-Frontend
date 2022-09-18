import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import Custom from "./Components/Custom/custom.jsx";
import Footer from "./Components/Footer/footer.jsx";
const H_Page =()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Custom/>
      <Footer/>
    </>
  )

}

export default H_Page;