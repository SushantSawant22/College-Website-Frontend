import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Courses from "./Components/Courses/courses";
import Latest from "./Components/latest/latest";
import NextCourse from "./Components/NextCourse/NextCourse";
const Course =()=>{
  return(
    <>
      <Navbar/>
      <Latest/>
      <NextCourse/>
      <Courses/>
      <Footer/>
    </>
  )

}

export default Course;