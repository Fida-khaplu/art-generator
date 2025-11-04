"use client";

import { getGenerationModels } from '@/api/api';
import TextToImageHeader from '@/components/Header/textToImgHeader'
import LeftSec from '@/components/textImgComp/LeftSec'
import RightSec from '@/components/textImgComp/rightSec'
import { Data } from '@/data/data'
import { fetchModels } from '@/lib/feature/modelSlice';
import { AppDispatch, RootState } from '@/lib/store'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading';

export default function TextToImage() {

     const dispatch = useDispatch<AppDispatch>();
    const { models } = useSelector((state: RootState) => state.models);
    const selected = useSelector((state: RootState) => state.inspiration.selected);
        const { loading } = useSelector((state: RootState) => state.generatedImage);


    // Fetch models once when component mounts
    useEffect(() => {
        if (models.length === 0) {
            dispatch(fetchModels());
        }
    }, [dispatch, models.length]);

    return (
        <div className=''>
            <TextToImageHeader />
            {loading && (
               <Loading/>
            )}

            <div className=' lg:border-t-[1px] border-[#EEEEEE]'>
                <div className='flex max-w-[1440px] m-auto'>
                    <div className="hidden lg:block lg:w-[250px] border-r-[1px] border-[#EEEEEE]">
                        <LeftSec data={models} />
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
                        <RightSec selected={selected} data={models}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
