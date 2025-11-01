'use client'
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import './header.css'


export default function Header() {
    return (
        <header className="flex justify-between py-[10px] lg:py-[22px]">
            <div className=" flex gap-[50px]">
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
                <nav className="hidden lg:flex items-center gap-[50px]">
                    <div>
                        <button className=" flex items-center">
                            <span className="list_item pr-[10px]">Photo Editing Tools</span>
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                    <div>
                        <button className=" flex items-center">
                            <span className="list_item pr-[10px]">AI Tools</span>
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                    <div>
                        <button className=" flex items-center">
                            <span className="list_item pr-[10px]">Support</span>
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>

                </nav>
            </div>
            <div className=" hidden md:block">
                <button className="px-[30px] cursor-pointer text-white py-[12px] rounded-[12px]   bg-gradient-to-r from-[#E67050] to-[#DB2268]">
                    Sign in
                </button>
            </div>
            <div className=" block md:hidden">
                <Image
                    className=" bg-green-500 rounded-4xl cursor-pointer"
                    src="/profile.png"
                    alt="login-icon"
                    width={20}
                    height={20}
                    priority

                />
            </div>
        </header>
    );
}