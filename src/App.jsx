import React from "react";
import Routes from "./Routes";
import "./app.css"

function App() {
  return (
    
    <>
 <div className="whatsapp-icon-container sm:w-20 ">
  <img 
    src="images/whatsappnew.svg" 
    alt="WhatsApp Icon" 
    className="whatsapp-icon sm:w-16 sm:hidden shadow-black-900_b2 shadow-2xl rounded-2xl"
  />
  <div className="whatsapp-info cursor-pointer" onClick={()=>window.open('https://api.whatsapp.com/send?phone=919100792007','_blank')}>
    <img 
      src="images/whatsappnew.svg" 
      alt="WhatsApp Icon" 
      className="whatsapp-info-icon"
    />
    <p className="whatsapp-info-text">+91 91007 92007</p>
  </div>
  
</div>
<img 
    src="images/whatsappnew.svg" 
    alt="WhatsApp Icon" 
    onClick={()=>window.open('https://api.whatsapp.com/send?phone=919100792007','_blank')}
    className=" sm:w-16 sm:block hidden cursor-pointer fixed bottom-4 z-10 right-5 shadow-black-900_b2 shadow-2xl rounded-2xl"
  />
      <Routes />;
    </>
)
}

export default App;
