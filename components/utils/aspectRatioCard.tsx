import Image from 'next/image'
import React from 'react'

interface AspectRationCardProps {
    img: string;
    title: string;
    ratio: string;
    onClick?: () => void;
    isActive?: boolean;
}

const AspectRatioCard: React.FC<AspectRationCardProps> = ({ img, ratio,onClick, title ,isActive }) => {
    console.log(isActive , "isActive");
    
    return (
        <div className='pb-[20px]'>
            <div onClick={onClick} className={`w-[55px] flex  justify-between item-center p-[6px] ${isActive ? "border-[1px] border-[#FA5711] bg-[#FA57111A]": "border-[1px] border-[#FA57111A]" }  rounded-sm`}>
                <div>
                    <Image
                        className="w-full h-auto object-cover"
                        src={img}
                        alt={title}
                        width={14}
                        height={14}
                    />
                </div>
                <p className='text-[10px]'>{ratio}</p>
            </div>
            <p className={`text-[10px] text-center ${isActive ? "text-[#FA5711]":" "}`}>{title}</p>
        </div>
    )
}

export default AspectRatioCard