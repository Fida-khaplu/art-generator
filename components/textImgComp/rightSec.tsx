"use client"
import '../../app/home.css'
import Image from 'next/image'
import { ChevronDown, Info } from 'lucide-react'
import { aspectRatioData, imgData, modelData } from '@/data/data'
import AspectRatioCard from '../utils/aspectRatioCard'
import { useState } from 'react'
import ModelCard from '../utils/modelCard'

export default function RightSec() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [activeIndexModal, setActiveIndexModal] = useState<number | null>(0);


    return (
        <div className='mx-[20px]'>
            <div
                className="inputborder w-full lg:w-[360px] m-auto  p-[2px]"
            >
                <div className="flex justify-between items-end bg-white rounded-[10px] p-[2px] lg:p-[6px]">

                    <textarea
                        placeholder="Describe what you want to create"
                        rows={6}
                        className="flex-1 px-[10px] lg:px-[15px] outline-none text-[12px] bg-transparent resize-none"
                    />
                    <span className=' p-1 bg-[#FA57111A] rounded-2xl'>
                        <Image
                            src='/lightbulb.png'
                            width={16}
                            height={16}
                            alt='textarea-icon'
                            className=' '
                        />
                    </span>
                </div>
            </div>
            <div className='border-b-[1px] border-[#EEEEEE] '>
                <button className=" flex items-center py-[15px] m-auto ">
                    <span className="list_item pr-[10px] text-[#FA5711] text-[12px]">Additional settings</span>
                    <ChevronDown className="w-5 h-5 text-[#FA5711]" />
                </button>
            </div>
            <div className='flex items-center pt-[20px] pb-[15px]'>
                <h1 className=" font-semibold text-[15px] lg:text-[16px] text-[#222222] pr-[5px]">Aspect Ratio</h1>
                <Info className="w-[18px] h-[18px]" />

            </div>
            <div className='flex gap-[20px] border-b-[1px] border-[#EEEEEE]'>
                {
                    aspectRatioData.map((item, index) => (

                        <AspectRatioCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            ratio={item.ratio}
                            isActive={activeIndex == index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))

                }
            </div>

            <div className='flex items-center pt-[20px] pb-[15px]'>
                <h1 className=" font-semibold text-[15px] lg:text-[16px] text-[#222222] pr-[5px]">Models & Styles</h1>
                <Info className="w-[18px] h-[18px]" />

            </div>

            <div className='flex gap-[12px] '>
                {
                    modelData.map((item, index) => (

                        <ModelCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            titleSec={item.titlesec}
                            isActive={activeIndexModal == index}
                            onClick={() => setActiveIndexModal(index)}
                        />
                    ))

                }
            </div>

            <div className='grid lg:grid-cols-3  gap-[10px] lg:pb-[140px]'>
                {
                    imgData.map((item, index) => (

                        <Image
                            key={index}
                            src={item.img}
                            width={113}
                            height={90}
                            alt='img'

                        />
                    ))

                }
            </div>

             <button className="lg:w-[360px] text-white py-[9px] lg:py-[15px] text-[10px] lg:text-[18px] font-semibold rounded-[8px] lg:rounded-[12px] bg-gradient-to-r from-[#E67050] to-[#DB2268]">
              Generate
            </button>


        </div>
    )
}
