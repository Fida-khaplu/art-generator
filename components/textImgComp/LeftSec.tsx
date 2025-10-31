import { Data } from '@/data/data'
import Image from 'next/image'
import React from 'react'

export default function LeftSec() {
    return (
        <div>
            <h3 className='text-[16px] text-center font-semibold py-[20px]  text-[#222222] border-b-[1px] border-[#EEEEEE]'>My Creations</h3>

            <div className=" grid grid-cols-2 gap-[10px] pt-[16px] pb-[10px] px-[18px]">
                {Data.slice(0, 4).map((item, index) => (
                    <Image
                        key={index}
                        src={item.img}
                        width={104}
                        height={130}
                        alt={item.title}
                        className="rounded-md object-cover w-[full] h-[130px]"
                    />
                ))}
            </div>
        </div>
    )
}
