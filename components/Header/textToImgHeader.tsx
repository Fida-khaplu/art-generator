'use client'
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import './header.css'
import { usePathname } from "next/navigation";


export default function TextToImageHeader() {
    const pathname = usePathname();
     const isActive = (path: string) =>
    pathname === path
      ? "bg-[#FA57111A] text-[#FA5711]" 
      : "bg-[#9999991A] text-[##999999] hover:bg-[#DB226830]";
    return (
        <header className="flex justify-between items-center py-[10px] lg:py-[22px] max-w-[1440px] px-[50px] m-auto">
            <div className=" flex gap-[115px]">
                <Link href='/'>
                    <Image
                      className="w-[160px] h-[20px] md:w-[279px] md:h-[36px] object-contain"
                        src="/art-generator.png"
                        alt="art-generator logo"
                        width={279}
                        height={36}
                        priority
                    />
                </Link>
                <nav className="hidden lg:flex items-center gap-[24px]">
                    <div>
                        <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/text-to-image")}`}>
                           Text to image
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/image-to-image")}`}>
                           Image to image
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/ai-avatar")}`}>
                           AI Avatar
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/face-swap")}`}>
                           Face Swap
                        </button>
                    </div>

                </nav>
            </div>
            
            <div className="">
                <Image
                    className=" bg-green-500 rounded-4xl"
                    src="/profile.png"
                    alt="login-icon"
                    width={40}
                    height={40}
                    priority

                />
            </div>
        </header>
    );
}