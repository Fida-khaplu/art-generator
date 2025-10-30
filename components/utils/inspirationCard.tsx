"use client";

import Image from "next/image";
import React from "react";

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

  return (
    <>
      {screen == "desktop" ? (
        // 💻 DESKTOP VERSION
        <div
          onClick={onClick}
          className="cursor-pointer rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <Image
            className="w-full h-auto object-cover"
            src={img}
            alt={title}
            width={width}
            height={height}
            priority
          />
          <p className="p-3 text-[18px] text-center lg:px-11">{title}</p>
        </div>
      ) : (
        
        <div
          onClick={onClick}
          className={`relative  cursor-pointer rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300`}
        >
          <Image
            // className={`w-full h-${height} object-cover `}
            className={`w-full ${heightClass} object-cover`}
            src={img}
            alt={title}
            width={height}
            height={width}
            priority
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-white text-[16px] font-medium">{title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default InspirationCard;
