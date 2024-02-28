import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const QuickLinks = () => {
  const navigate = useNavigate()
  return (
    <div className="h-18 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center w-full">
      <h2 className="text-lg font-semibold mb-2 text-center">Other Services</h2>
      <div className="flex gap-4 mb-3">
      <button onClick={()=>navigate('/drones')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/drone_new.svg" alt="" />
 
Drones
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
<button onClick={()=>navigate('/training')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/training_blackk.svg" alt="" />
 
  Security Training
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
<button onClick={()=>navigate('/guards')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/img_guard_black_900.svg" alt="" />
 
  Security Guards
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
        
      </div>
      <div className="flex gap-4 mb-3">
      <button onClick={()=>navigate('/infrastructure')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/infra_black.svg" alt="" />
 
  Security infra
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
<button onClick={()=>navigate('/risk-assessment')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/Risk_black.svg" alt="" />
 
  Risk Assessment
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
<button onClick={()=>navigate('/investigation')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/img_guard_black_900.svg" alt="" />
 
  Investigation
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>
        
      </div>
      <div className="flex gap-4 ">
      <button onClick={()=>navigate('/security-audits')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/Audits_Black.svg" alt="" />
 
  Security Audits
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>    
      <button onClick={()=>navigate('/housekeeping')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/img_cleaningcart.svg" alt="" />
 
  House Keeping
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>    
      <button onClick={()=>navigate('/nri-properties')} className="flex flex-1 items-center justify-around bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out">

<img src="images/img_propertyagent.svg" alt="" />
 
  NRI Properties
  
  <FaArrowRight className="w-4 h-4 ml-2" />
</button>    
      </div>
    </div>
  );
};

export  {QuickLinks};
