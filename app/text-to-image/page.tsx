"use client";

import { getGenerationModels } from '@/api/api';
import TextToImageHeader from '@/components/Header/textToImgHeader'
import LeftSec from '@/components/textImgComp/LeftSec'
import RightSec from '@/components/textImgComp/rightSec'
import { Data } from '@/data/data'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

export default function TextToImage() {

    const [modelImage, setModelImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const selected = useSelector((state: RootState) => state.inspiration.selected);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getGenerationModels();
                const formattedData = data.data.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    img: item?.image
                        ? `https://cognise.art/${item.image}`
                        : "/fallback.png",
                }));
                console.log("data text-imagae==>", formattedData);

                setModelImage(formattedData);
            } catch (err) {
                console.error("Error loading inspirations:", err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <div className=''>
            <TextToImageHeader />

            <div className=' lg:border-t-[1px] border-[#EEEEEE]'>
                <div className='flex max-w-[1440px] m-auto'>
                    <div className="hidden lg:block lg:w-[250px] border-r-[1px] border-[#EEEEEE]">
                        <LeftSec data={modelImage} />
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
                        <RightSec selected={selected} data={modelImage} setLoading={setLoading}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
