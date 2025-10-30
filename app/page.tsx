"use client"
import InspirationCard from '@/components/utils/inspirationCard';
import './home.css'
import { useState } from "react";
import Header from '@/components/Header/header';
import InspirationSec from '@/components/homeComp/inspirationSec';




export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const handleInputChange = () => {
    console.log("change");

  }
  return (
    <div className=" max-w-[1440px] px-[16px] lg:px-[60px] m-auto">
      <Header/>
      <div className="py-[30px] lg:py-[60px] ">
        <h1 className="pb-[20px] font-semibold text-[20px] lg:text-[50px] text-center text-[#222222]">AI Art Generator</h1>
        <p className=" w-full lg:w-[925px] m-auto text-center text-[#666666] text-[10px] lg:text-[20px]">
          Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of
          AI generated art. Enter a prompt, and choose a style,  AI art generator bring your ideas to life!
        </p>
      </div>

      <div className=" pb-[24px] lg:pb-[80px]">
        <div
          className="inputborder w-full lg:w-[900px] m-auto  p-[2px]"

        >
          <div className="flex justify-between items-center bg-white rounded-[10px] p-[2px] lg:p-[6px]">
            <input
              type="text"
              value={inputVal}
              placeholder="Enter prompt here..."
              onChange={handleInputChange}
              className="flex-1 px-[10px] lg:px-[30px] outline-none text-gray-700 bg-transparent"
            />
            <button className="px-[11px] lg:px-[40px] text-white py-[9px] lg:py-[13px] text-[10px] lg:text-[20px] rounded-[8px] lg:rounded-[12px] bg-gradient-to-r from-[#E67050] to-[#DB2268]">
              Generate
            </button>
          </div>
        </div>
      </div>

      <InspirationSec/>

      
    </div>

  );
}
