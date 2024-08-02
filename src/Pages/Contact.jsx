

function Contact (){
    return <div className="bg-white h-[100] sm:flex grid gap-20 justify-center pt-[250px] sm:px-0 pl-10   pb-[100px]">
    
{/* Social meda */}

    <div className="">
    <img className="w-[140px] -mt-[100px] h-[140px]" src="./src/Images/Logo.png" alt="" />
        <h1 className="sm:text-2xl text-3xl w-[300px]  sm:w-[300px]">Hoggan Academy has been proven to produce competent graduates in the industry through the bootcamp program</h1>
        <div className="flex  text-4xl py-3 gap-4">
         <a href="https://www.facebook.com/hoggaanacademy/about"><i class="fa-brands fa-facebook"></i></a>
        <i class="fa-brands fa-square-instagram"></i>
        <a href="https://wa.me/+2520614220622"><i class="fa-brands fa-square-whatsapp"></i></a>
        <i class="fa-brands fa-square-x-twitter"></i>
       <a href="https://www.youtube.com/@hoggaanacademy">  <i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>

{/* Contact Us */}


<div className="text-black">
    <h1 className="text-5xl font-bold  text-black">Contact Us</h1>
    <h1 className="text-2xl   pt-1">Info@hoggaanacademy.com</h1>
    <h1 className="text-2xl ">+252614220422</h1>
    <h1 className="text-2xl   ">Yoobsan Market, Beledweyne, Somalia</h1>
</div>

{/* Quick links */}
<div className="">
<h1 className="text-5xl font-bold   -py-7">Quick Links</h1>
<ul className=" text-5xl font-bold ml-20 my-6  text-blue-500 py-2 ">
<a href="./Pages/Home.jsx"> <li  className="hover:underline cursor-pointer text-2xl text-blue-600 pt-1 "> Home</li> </a>
<a href="./Pages/About.jsx"><li  className="hover:underline cursor-pointer text-2xl text-blue-600 pt-1 ">About</li></a> 
 <a href="./Pages/Gallary.jsx"> <li className="hover:underline cursor-pointer text-2xl text-blue-600 pt-1 ">Gallary</li> </a>
 <a href="./Pages/Contact.jsx"> <li className="hover:underline  cursor-pointer  text-2xl text-blue-600 pt-1 ">Contact</li> </a>
 </ul>
 <div className="  ">
  <hr className="bg-black h-1 mt-[60px] sm:mr-10  sm:-ml-[860px] -ml-10 text-black" />
 </div>
 <div>
 <h1 className="my-2  sm:absolute sm:left-[430px] text-2xl">Copyright © 2024. All rights reserved by Hoggan Academy.</h1>
</div>
</div>

    </div>
}


export default Contact