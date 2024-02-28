import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const QuickLinks = () => {
  const navigate = useNavigate();
  return (
    <div className="h-18 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center w-full">
      <h2 className="text-lg font-semibold mb-2 text-center">Other Services</h2>
      <div className="flex gap-4 mb-3 sm:block">
        <button
          onClick={() => navigate("/drones")}
          className="flex flex-1 sm:w-full  sm:mb-3 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/drone_new.svg" alt="" className="w-8" />

          <span className="-ml-[135px] "> Drones</span>
          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/training")}
          className="flex sm:w-full flex-1 sm:mb-3 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/training_blackk.svg" alt="" className="w-8" />

          <span className="-ml-[85px] sm:-ml-[55px]"> Security Training</span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/guards")}
          className="flex sm:w-full flex-1  items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/img_guard_black_900.svg" alt="" className="w-8" />

          <span className="-ml-[85px] sm:-ml-[60px]"> Security Guards</span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
      <div className="flex gap-4 mb-3 sm:block">
        <button
          onClick={() => navigate("/infrastructure")}
          className="flex sm:mb-3 sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/infra_black.svg" alt="" className="w-8" />

          <span className="-ml-[85px] sm:-ml-[80px]"> Security infra</span>
          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/risk-assessment")}
          className="flex sm:mb-3 sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/Risk_black.svg" alt="" className="w-8" />

          <span className="-ml-[85px] sm:-ml-[55px]"> Risk Assessment</span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/investigation")}
          className="flex  sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/img_guard_black_900.svg" alt="" className="w-8" />

          <span className="-ml-[105px] sm:-ml-[85px]"> Investigation</span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
      <div className="flex gap-4 sm:block">
        <button
          onClick={() => navigate("/security-audits")}
          className="flex sm:mb-3 sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/Audits_Black.svg" alt="" className="w-8" />

          <span className="-ml-[70px]"> Security Audits</span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/housekeeping")}
          className="flex sm:mb-3 sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/img_cleaningcart.svg" alt="" className="w-8" />

          <span className="-ml-[100px] sm:-ml-[65px]"> House Keeping </span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
        <button
          onClick={() => navigate("/nri-properties")}
          className="flex sm:w-full flex-1 items-center justify-between bg-transparent hover:text-black-900 hover:bg-[#fcb131] text-[#fcb131] border border-[#fcb131] hover:text-black hover:border-transparent py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <img src="images/img_propertyagent.svg" alt="" className="w-8" />

          <span className="-ml-[100px] sm:-ml-[75px]"> NRI Properties </span>

          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export { QuickLinks };
