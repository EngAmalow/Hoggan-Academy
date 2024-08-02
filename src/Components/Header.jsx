import { NavLink } from "react-router-dom"

function Header (){
    return <div>
     <div className="sm:bg-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.07)] rounded-xl flex fixed  justify-between items-center pl-4 sm:px-20">
 <img className="w-[80px] h-[80px]" src="./src/Images/Logo.png" alt="" />

<ul className="flex  text-[#0099FF] text-3xl gap-10  ml-[550px] ">
<NavLink to='/Home'> <li  className="hover:underline cursor-pointer "> Home</li></NavLink>
<NavLink to='/About'> <li  className="hover:underline cursor-pointer ">About</li></NavLink>
<NavLink to='/Gallary'><li className="hover:underline cursor-pointer ">Gallary</li></NavLink>
<NavLink to='/Contact'> <li className="hover:underline cursor-pointer ">Contact</li></NavLink>
 </ul>

<button className="   rounded-xl border-[3px] border-white hover:border-[#0099FF] px-[6px]    hover:bg-[#0099FF] text-white text-2xl ml-8">Register</button>
    </div>
  
    </div>
 
}
export default Header 




{/* This is Home Page 
<div className="">
 <div className="sm:flex grid justify-between bg:[rgb(0,0,0.98)]  sm:p-[130px] pl-2 pt-[100px] ">
<div className=" text-black">
    <h1 className="sm:w-[690px] w-[300px] font-bold text-5xl   sm:text-6xl">The Next Generation<br /> of  Tech <span className="text-[#8ECFEA] animate-pulse">software</span>  In Somalia</h1>
<p className=" sm:w-[410px] w-[340px] text-3xl py-3 sm:py-8">Through market-aligned skills training, we help learners build new career possibilities with greater confidence and capability.</p>

 <a href="https://wa.me/+2520614220622"><button className="bg-[#8ECFEA] text-[#140E3A] text-4xl rounded sm:px-6 px-3 py-1 mt-2 mb-3 sm:py-3">Apply Here</button></a>
</div>

{/* images  */}
{/* <div>

<div>
<img className="sm:w-[660px] w-[350px] h-[260px] sm:h-[400px] rounded " src="./src/Images/Certificate.jpg" alt="" />
</div>
</div>
</div> */}

 
 {/* Div Guud */}
 
 {/* Our Course */}   
{/* <div>
<h1 className="text-center font-bold sm:text-7xl text-6xl ">Our Courses</h1> */}
{/* Images  */}
{/* <div className=" grid pl-4  justify-center ">
    <div className="sm:flex grid mt-10 ">
        <div>
<img className="sm:w-[360px]  w-[300px] h-[200px] sm:h-[230px] rounded mr-10 " src="./src/Images/Java.jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Barashada Javascript</h1> */}
{/* <h1 className="font-bold text-1xl mt-1 ml-[120px]">JAVASCRIPT</h1> */}
      {/* </div>
      <div>
<img className="sm:w-[360px]  w-[300px] h-[200px] sm:h-[230px] rounded mr-10 " src="./src/Images/Html (1).jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Barashada Html/Css</h1> */}
{/* <h1 className="font-bold text-1xl mt-1 ml-[130px]">HTML</h1> */}
{/* </div>

<div>
<img className="sm:w-[360px]  w-[300px] h-[200px] sm:h-[230px] rounded mr-10 " src="./src/Images/Video1.jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Barashada Video Editing</h1> */}
{/* <h1 className="font-bold text-1xl mt-1 ml-[120px]">VIDEO EDITING</h1> */}
{/* </div>
</div>
</div> */}



{/* Images  */}
{/* <div className=" grid pl-4  justify-center ">
    <div className="sm:flex grid sm:mt-10 mt-10 ">
        <div>
<img className="sm:w-[360px]  w-[300px] h-[200px] sm:h-[230px] rounded mr-10 " src="./src/Images/Frontend.jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Barashada Frontend</h1> */}
{/* <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 4AAD</h1> */}
      {/* </div>
      <div>
<img className="sm:w-[360px]  w-[300px] h-[200px] sm:h-[230px] rounded mr-10 " src="./src/Images/Admition.jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Admition Is Open</h1>
{/* <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 4AAD</h1> */}
{/* </div> */}  

{/* <div>
<img className="sm:w-[360px]  w-[300px] h-[220px] sm:h-[230px] rounded mr-10 " src="./src/Images/Scholarship.jpg" alt="" />
<h1 className="font-bold ml-10 text-2xl mt-3">Bixinta Schoolarship</h1> */}
{/* <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 4AAD</h1> */}
{/* </div>
</div>
</div>
</div>
</div>  */}








{/* this is About------pages */}
{/* <div className="ml-[400px] my-10">
<div className="  text-black   h-[530px] w-[580px]">
    <h1 className="font-bold text-5xl ml-[160px] py-3">ABOUT US</h1>
<h3 className="ml-[200px] text-2xl">Introduction</h3>
<p className="w-[600px] text-1xl   ">When we started Hoggan Offline Courses back in 2018, our goal was to give Somalis from all across the world the ability to learn the skills they’d need to succeed in this modern century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped hundreds of Somali people worldwide unlock modern technical skills and reach their full potential through code. There are two commitments we've made to the world. We've been grounded by these since day one: Increase access <br /> to high-quality education for everyone, everywhere; Enhance <br /> teaching and learning Offline through research</p>
 
    <h1 className="font-bold text-5xl ml-[160px]">Our Mission</h1>
    <p className="w-[600px] text-1xl">We want to create a world where anyone can build something meaningful  with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Dugsiiye, we are dedicated to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them</p>
</div>
 
    <h1 className="font-bold text-5xl ml-[160px]">Our Vision</h1>
<p className="w-[600px] text-1xl">To reach out to all Somali communities through knowledge and to be a comprehensive online institute that offers quality-oriented education and accredited certification</p>
</div> */}


{/* this is Gallary pages---------- */}
{/* <div className="flex justify-center">
     <div>
    
    
    
     <div className="">
        <h1 className=" rounded text-center py-4 mt-20 font-bold text-4xl text-black">OUR GALLERY</h1>
    </div>
     */}
     {/* Ardayda Kaalmaha Galay Hoggan  */}
{/*          
    <div className="flex mt-[20px]   gap-10">
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kaalinta-1aad (1).jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">AISHA HASSAN MOHAMED</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 1AAD</h1>
        </div>
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kaalinta-1aad (4).jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">AHMED BOCOR AHMED</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[130px] ">KAALINTA 1AAD</h1>
        </div>
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kaalinta-1aad (2).jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">NASHAD ABDIRAHMAN FARAH</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 1AAD</h1>
        </div>
     </div> */}
    {/* Kaalinta 2aad  */}
    {/* <div className="flex mt-[20px]   gap-10">
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kaalinta2aad.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">SHAMSA ABTIDON ABDI</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[100px] ">KAALINTA 2AAD</h1>
        </div>
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kaalinta-3aad (5).jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">SABIRIN ABDIRAHMAN ALI</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[130px] ">KAALINTA 3AAD</h1>
        </div>
        <div>
        <img className="w-[380px] h-[450px] rounded" src="./src/Images/Kalinta4aad.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">IFRAH HUSIEN OSMAN</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[130px]">KAALINTA 4AAD</h1>
        </div>
     </div> */}
     {/* qeybta 2aad  */}
    

    

    

    
 
   
    
    
    
    
      
    {/* 
    Kasoo Qeyb GalaYaasheena EE xaflada Hoggan academy
     */}
     
         
        {/* <div className="flex mt-[20px]   gap-10">
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Daahir.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">DAAHIR ABDIWALI AHMED</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[100px] ">DIRECTOR GREEN-HOPE</h1>
        </div>
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Dhagacade.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">ABDULLAHI ABDIRASHID HASSAN</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[160px] ">DIRECTOR EGALE</h1>
        </div>
       <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Korento.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">MOHAMED AHMED HASSAN</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[100px] ">DIRECTOR SIGAMA</h1>
        </div>
     </div> */}
    
    {/* Qeybta Kowaad Gallery */}
     {/* <div className="flex mt-[20px]   gap-10">
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/carab.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">ABDIWALI MOHAMED YUSUF </h1>
        <h1 className="font-bold text-1xl mt-1 ml-[100px]">DIRECTOR..........?</h1>
        </div>

  
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Soo.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">ABDULLAHI OSMAN HANSHI</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[150px] ">HEAD OF SAFA</h1>
        </div> 


        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Jobkey.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">SHAFEEC .....................?</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[120px]">................?</h1>
        </div>
     </div> */}
     
     
          {/* kaalinta 2aad  */}
     {/* <div className="  py-10 flex   gap-10">
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Moha.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">Zaabirin Abdullahi Ali</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[100px]">KAALINTA 3AAD</h1>
        </div>
        <div>
        <img className="w-[380px] h-[280px] rounded" src="./src/Images/Liiban.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">LIIBAN AADAN OMAR</h1>
        <h1 className="font-bold text-1xl mt-1 ml-[10font-bold text-1xl mt-1 ml-[100px] ">DIRECTOR HOGGAN</h1>
        </div>
        <div>
        <img className="w-[390px] h-[280px] rounded" src="./src/Images/Jamac.jpg" alt="" />
        <h1 className="font-bold ml-10 text-2xl mt-3">LIIBAN AADAN </h1>
        <h1 className="font-bold text-1xl mt-1 ml-[160px] ">KAALINTA 1AAD</h1>
        </div>
     </div>
     </div>
    </div> */}











{/* Contacts */}
    {/* <div className="bg-[#140E3A] h-[100] flex gap-20 justify-center pt-[300px]  pb-[150px]"> */}
    
    {/* Social meda */}
    
        {/* <div className="">
        <img className="w-[100px] -mt-10 h-[100px]" src="./src/Images/Logo.png" alt="" />
            <h1 className="text-2xl text-white w-[400px]">Hoggan Academy has been proven to produce competent graduates in the industry through the bootcamp program</h1>
            <div className="flex text-white text-4xl py-3 gap-4">
             <a href="https://www.facebook.com/hoggaanacademy/about"><i class="fa-brands fa-facebook"></i></a>
            <i class="fa-brands fa-square-instagram"></i>
            <a href="https//.me/+252614220622"><i class="fa-brands fa-square-whatsapp"></i></a>
            <i class="fa-brands fa-square-x-twitter"></i>
           <a href="https://www.youtube.com/@hoggaanacademy">  <i class="fa-brands fa-youtube"></i></a>
            </div>
        </div> */}
    
    {/* Contact Us */}
    
    
    {/* <div>
        <h1 className="text-5xl font-bold  text-white py-2">Contact Us</h1>
        <h1 className="text-2xl text-white pt-1">Info@hoggaanacademy.com</h1>
        <h1 className="text-2xl text-white ">+252614220422</h1>
        <h1 className="text-2xl text-white ">Yoobsan Market, Beledweyne, Somalia</h1>
    </div> */}
    {/* Quick links */}
    {/* <div className="">
    <ul className=" text-5xl font-bold  text-blue-500 py-2 ">
    <a href="./Pages/Home.jsx"> <li  className="hover:underline cursor-pointer text-2xl text-white pt-1 "> Home</li> </a>
    <a href="./Pages/About.jsx"><li  className="hover:underline cursor-pointer text-2xl text-white pt-1 ">About</li></a> 
     <a href="./Pages/Gallary.jsx"> <li className="hover:underline cursor-pointer text-2xl text-white pt-1 ">Gallary</li> </a>
     <a href="./Pages/Contact.jsx"> <li className="hover:underline cursor-pointer  text-2xl text-white pt-1 ">Contact</li> </a>
     </ul>
     
    </div>
    
        </div> */}


{/* </div> */}
 