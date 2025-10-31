"use client";

import TextToImageHeader from '@/components/Header/textToImgHeader'
import LeftSec from '@/components/textImgComp/LeftSec'
import RightSec from '@/components/textImgComp/rightSec'
import { Data } from '@/data/data'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
export default function TextToImage() {

    const selected = useSelector((state: RootState) => state.inspiration.selected);

    return (
        <div className=''>
            <TextToImageHeader />

            <div className=' lg:border-t-[1px] border-[#EEEEEE]'>
                <div className='flex max-w-[1440px] m-auto'>
                    <div className="hidden lg:block lg:w-[250px] border-r-[1px] border-[#EEEEEE]">
                        <LeftSec />
                    </div>
                    <div className='hidden lg:block lg:w-[790px] border-r-[1px] border-[#EEEEEE] pt-[177px] px-[120px]'>
                        {selected ? (
                            <Image
                                src={selected.img}
                                width={550}
                                height={550}
                                alt={selected.title}
                                className="rounded-md object-cover w-full h-[550px]"
                            />
                        ) : (
                            <Image
                                src={Data[0].img}
                                width={550}
                                height={550}
                                alt={Data[0].title}
                                className="rounded-md object-cover w-[full] h-[550px]"
                            />
                        )}

                    </div>
                    <div className=' w-full lg:w-[400px] pt-[20px]'>
                        <RightSec selected = {selected}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
