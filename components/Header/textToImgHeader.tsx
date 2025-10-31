// 'use client'
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import './header.css'
// import { usePathname } from "next/navigation";


// export default function TextToImageHeader() {
//     const pathname = usePathname();
//      const isActive = (path: string) =>
//     pathname === path
//       ? "bg-[#FA57111A] text-[#FA5711]" 
//       : "bg-[#9999991A] text-[##999999] hover:bg-[#DB226830]";
//     return (
//         <header className="flex justify-between items-center py-[10px] lg:py-[22px] max-w-[1440px] px-[50px] m-auto">
            
//             <div className=" flex lg:gap-[115px]">
//                 <Link href='/'>
//                     <Image
//                       className="w-[160px] h-[20px] md:w-[279px] md:h-[36px] object-contain"
//                         src="/art-generator.png"
//                         alt="art-generator logo"
//                         width={279}
//                         height={36}
//                         priority
//                     />
//                 </Link>
//                 <nav className="hidden lg:flex items-center gap-[24px]">
//                     <div>
//                         <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/text-to-image")}`}>
//                            Text to image
//                         </button>
//                     </div>
//                     <div>
//                         <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/image-to-image")}`}>
//                            Image to image
//                         </button>
//                     </div>
//                     <div>
//                         <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/ai-avatar")}`}>
//                            AI Avatar
//                         </button>
//                     </div>
//                     <div>
//                         <button className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive("/face-swap")}`}>
//                            Face Swap
//                         </button>
//                     </div>

//                 </nav>
//             </div>
            
//             <div className="">
//                 <Image
//                     className=" bg-green-500 rounded-4xl"
//                     src="/profile.png"
//                     alt="login-icon"
//                     width={40}
//                     height={40}
//                     priority

//                 />
//             </div>
//         </header>
//     );
// }


'use client'
import Image from "next/image";
import Link from "next/link";
import './header.css'
import { usePathname } from "next/navigation";

export default function TextToImageHeader() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "bg-[#FA57111A] text-[#FA5711]"
      : "bg-[#9999991A] text-[#999999] hover:bg-[#DB226830]";

  return (
    <header className="w-full max-w-[1440px] mx-auto overflow-x-hidden">
              <div>

      <div className="flex justify-between items-center py-[10px] lg:py-[22px] px-[16px] sm:px-[24px] lg:px-[50px]">
        {/* Left Section */}
        <div className="flex items-center gap-[24px] lg:gap-[115px]">
          <Link href="/">
            <Image
              className="w-[160px] h-[20px] md:w-[279px] md:h-[36px] object-contain"
              src="/art-generator.png"
              alt="art-generator logo"
              width={279}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[24px]">
            {[
              { path: "/text-to-image", label: "Text to image" },
              { path: "/image-to-image", label: "Image to image" },
              { path: "/ai-avatar", label: "AI Avatar" },
              { path: "/face-swap", label: "Face Swap" },
            ].map(({ path, label }) => (
              <button
                key={path}
                className={`flex items-center py-[8px] px-[16px] rounded-md cursor-pointer ${isActive(path)}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Profile */}
        <div>
          <Image
            className="bg-green-500 rounded-full"
            src="/profile.png"
            alt="login-icon"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
         <nav className="md:hidden w-[335px] flex items-center gap-[6px] justify-center m-auto">
                    <div>
                        <button className={`flex items-center text-[10px] py-[5px] px-[8px] rounded-md cursor-pointer ${isActive("/text-to-image")}`}>
                           Text to image
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center text-[10px] py-[5px] px-[8px] rounded-md cursor-pointer ${isActive("/image-to-image")}`}>
                           Image to image
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center text-[10px] py-[5px] px-[8px] rounded-md cursor-pointer ${isActive("/ai-avatar")}`}>
                           AI Avatar
                        </button>
                    </div>
                    <div>
                        <button className={`flex items-center text-[10px] py-[5px] px-[8px] rounded-md cursor-pointer ${isActive("/face-swap")}`}>
                           Face Swap
                        </button>
                    </div>

                </nav>
      </div>
    </header>

  );
}
