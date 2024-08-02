import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Gallary"
import Contact from "./Pages/Contact"
import Gallary from "./Pages/Gallary"
 

function App(){
    return  <Routes>
<Route path="/Home" element= {<Home/>}Route/>
<Route path="/About" element= {<About/>}Route/>
<Route path="/Gallary" element= {<Gallary/>}Route/>
<Route path="/Contact" element= {<Contact/>}Route/>
   </Routes>


      

  
}
export default App