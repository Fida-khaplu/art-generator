"use client";

import { setSelectedInspiration } from "@/lib/feature/inspirationSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface InspirationCardProps {
  img: string;
  title: string;
  variant?: "large" | "small";
  screen?: "desktop" | "mobile";
  height:number;
  width:number;
  onClick?: () => void;
}

const InspirationCard: React.FC<InspirationCardProps> = ({
  img,
  title,
  variant ,
  screen,
  height,
  width,
  onClick,
}) => {

  const heightClass = variant === "large" ? "h-[220px]" : "h-[105px]";
  const router = useRouter();
    const dispatch = useDispatch();

  const handleClick = ()=>{
       dispatch(setSelectedInspiration({img, title }));
     if (onClick) {
      onClick();
    }
  }

  return (
    <>
      {screen == "desktop" ? (
        // 💻 DESKTOP VERSION
        <div
          onClick={handleClick}
          className="cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <Image
            className={`w-full object-cover rounded-2xl`}
              style={{ height: `${height}px` }}

            src={img}
            alt={title}
            width={width}
            height={height}
            priority
          />
          <p className="p-3 text-[18px] text-center lg:px-11">
             {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </p>
        </div>
      ) : (
        
        <div
          onClick={handleClick}
          className={`relative  cursor-pointer rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300`}
        >
          <Image
            className={`w-full ${heightClass} object-cover `}

            src={img}
            alt={title}
            width={height}
            height={width}
            priority
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-white text-[16px] font-medium">
               {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default InspirationCard;
