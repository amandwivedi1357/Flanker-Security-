// import React from "react";
// import { FaArrowRight } from  "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const QuickLinks = () => {
//   const navigate = useNavigate();
//   return (
//     <div className=" bg-gray-50  p-4 rounded-lg shadow-md flex flex-col justify-center w-[60%] mt-[-64rem] ml-4">
//       <h2 className="text-lg font-semibold mb-2 text-center">Our Services Spectrums</h2>
//       <div className="flex flex-col gap-4 mb-5 sm:mb-1 sm:block mx-auto">
//       <button
//           onClick={() => navigate("/guards")}
//           className="flex sm:w-full bg-[#fff]  w-[100%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/img_guard_black_900.svg" alt="" className="w-7 ml-4" />

//           <span className=" sm:-ml-[60px] ml-4"> Security Guards</span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/training")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/training_blackk.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[55px]"> Security Training</span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/drones")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/drone_new.svg" alt="" className=" w-7" />

//           <span className="sm:-ml-[135px] "> Drones</span>
//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//       </div>
//       <div className="flex flex-col gap-4 mb-5 sm:block sm:mb-1">
//         <button
//           onClick={() => navigate("/infrastructure")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/infra_black.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[80px]"> Security Infra</span>
//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/risk-assessment")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/Risk_black.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[55px]"> Risk Assessment</span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/investigation")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/img_guard_black_900.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[85px]"> Investigation</span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//       </div>
//       <div className="flex flex-col gap-4 sm:block sm:mb-1">
//         <button
//           onClick={() => navigate("/security-audits")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/Audits_Black.svg" alt="" className=" w-7" />

//           <span className="sm:-ml-[70px] "> Security Audits</span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/housekeeping")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/img_cleaningcart.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[65px]"> House Keeping </span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//         <button
//           onClick={() => navigate("/nri-properties")}
//           className="flex sm:w-full bg-[#fff]  w-[60%] sm:mb-3  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-black-900 border bordblacktext-black-9004c2bf] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
//         >
//           <img src="images/img_propertyagent.svg" alt="" className=" w-7" />

//           <span className=" sm:-ml-[75px]"> NRI Properties </span>

//           <FaArrowRight className=" w-4 h-4 ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export { QuickLinks };


import { Img, Text } from 'components'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const QuickLinks = ({route}) => {
  console.log(route)
  function handleMouseEnter(event, index, hoverImage) {
    const elements = event.currentTarget.getElementsByClassName("vec1");
    if (elements.length > 0) {
      elements[0].src = hoverImage;
    }
  }

  function handleMouseLeave(event, index, originalImage) {
    const elements = event.currentTarget.getElementsByClassName("vec1");
    if (elements.length > 0) {
      elements[0].src = originalImage;
    }
  }
  const quickLinksArr = [
    {
      name:'Security Guards',
      hover: "images/img_guard_black_900.svg",
      image: "images/img_guard.svg",
      link:'/guards'
    },
    {
      name:'Security Training',
      image: "images/training_yel.svg",
      hover: "images/training_blackk.svg",
      link:'/training'
    },
    {
      name:'Drones',
      image: "images/drones_new_yellow.svg",
      hover: "images/drone_new.svg",
       link:'/drones'
    },
    {
      name:'Security Infra',
      hover: "images/infra_black.svg",
      image: "images/infra_yellow.svg",
      link:'/infrastructure'
    },
    {
      name:'Risk Assessment',
      hover: "images/Risk_black.svg",
      image: "images/Risk_yellow.svg",
      link:'/risk-assessment'
    },
    {
      name:'Investigation',
      hover: "images/img_guard_black_900.svg",
      image: "images/img_guard.svg",
      link:'/investigation'
    },
    {
      name:'Security Audits',
      image: "images/Audits_yellow.svg",
      hover: "images/Audits_Black.svg",
      link:'/security-audits'
    },
    {
      name:'Housekeeping',
      hover: "images/img_cleaningcart.svg",
      image: "images/HouseKeep.svg",
      link:'/housekeeping'
    },
    {
      name:'NRI properties',
      hover: "images/img_propertyagent.svg",
      image: "images/propertyAgent.svg",
      link:'/nri-properties'
    },
  ]
  const navigate = useNavigate()
  return (
    <div className='w-[30%]  bg-gray-200 inner_left sm:w-full sm:-mt-12'>
      <h2 className="text-lg mt-4 font-semibold mb-5 text-center">Our Services Spectrums</h2>

      {
        quickLinksArr.map((data,idx)=>(
          <div
          onMouseEnter={(e) => handleMouseEnter(e, idx, data.hover)}
          onMouseLeave={(e) => handleMouseLeave(e, idx, data.image)}
          onClick={()=>navigate(data.link)} key={idx} className='w-[80%] mb-3 bg-white-A700 rounded-md  mx-auto hover:bg-orange-400 cursor-pointer'>
        <div className='flex justify-between'>
          <div className='flex gap-5 justify-between ml-4 my-2'>
            <Img src={data.image} className='w-7 py-2 vec1'/>
          <Text className='text-[18px] my-auto'  size="txtLatoRegular15">{data.name}</Text>
         
          </div>
          <FaArrowRight className=" w-4 h-4 ml-2 my-auto mr-4" />
        </div>
      </div>
        ))
      }
      
    </div>
  )
}

export  {QuickLinks}
