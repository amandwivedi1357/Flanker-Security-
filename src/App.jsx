import React from "react";
import Routes from "./Routes";
import "./app.css"

function App() {
  return (
    
    <>
 <div className="whatsapp-icon-container">
  <img 
    src="images/whatsappnew.svg" 
    alt="WhatsApp Icon" 
    className="whatsapp-icon"
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
    
      <Routes />;
    </>
)
}

export default App;
