import TextToImageHeader from '@/components/Header/textToImgHeader'
import LeftSec from '@/components/textImgComp/LeftSec'
import RightSec from '@/components/textImgComp/rightSec'
import { Data } from '@/data/data'
import Image from 'next/image'
export default function TextToImage() {
    return (
        <div>
            <TextToImageHeader />

            <div className='border-t-[1px] border-[#EEEEEE]'>
                <div className='flex max-w-[1440px] m-auto'>
                <div className="lg:w-[250px] border-r-[1px] border-[#EEEEEE]">
                   <LeftSec/>
                </div>
                <div className='lg:w-[790px] border-r-[1px] border-[#EEEEEE] pt-[177px] px-[120px]'>
                    <Image
                        src={Data[0].img}
                        width={550}
                        height={550}
                        alt={Data[0].title}
                        className="rounded-md object-cover w-[full] h-[550px]"
                    />

                </div>
                <div className='lg:w-[400px] pt-[20px]'>
                    <RightSec/>
                </div>
            </div>

            </div>
        </div>
    )
}
