import Image from 'next/image';
import React from 'react'


interface modelCardProps {
    img: string;
    title: string;
    titleSec: string;
    onClick?: () => void;
    isActive?: boolean;
}
const ModelCard: React.FC<modelCardProps> = ({ img, title, titleSec, isActive ,onClick }) => {
    return (
        <div className='lg:pb-[15px]'>
            <div onClick={onClick} className={`w-[174px] flex  justify-between item-center p-[6px] ${isActive ? "border-[1px] border-[#FA5711] bg-[#FA57111A]" : "border-[1px] border-[#FA57111A]"}  rounded-lg`}>
                <div>
                    <p className='text-[10px] pt-[6px]'>{title}</p>
                    <p className='text-[14px] font-semibold'>{titleSec}</p>

                </div>
                <div className='py-[5px]'>
                    <Image
                        className="w-full h-[40px] object-cover"
                        src={img}
                        alt={title}
                        width={40}
                        height={40}
                    />
                </div>

            </div>

        </div>
    )
}

export default ModelCard