import Image from 'next/image'

interface LeftSecProps {
  data: {
    id:string;
    name:string;
    img: string;
  }[];
}

export default function LeftSec({data}:LeftSecProps) {
    return (
        <div>
            <h3 className='text-[16px] text-center font-semibold py-[20px]  text-[#222222] border-b-[1px] border-[#EEEEEE]'>My Creations</h3>

            <div className=" grid grid-cols-2 gap-[10px] pt-[16px] pb-[10px] px-[18px]">
                {data.slice(0, 4).map((item, index) => (
                    <Image
                        key={index}
                        src={item.img}
                        width={104}
                        height={130}
                        alt={item.name}
                        className="rounded-md object-cover w-[full] h-[130px]"
                    />
                ))}
            </div>
        </div>
    )
}
