"use client"
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";

export default function Portal({text,linktext, link}) {
    const router = useRouter();
    const handleClick = () => {
        router.push(link);
    }
    return (
        <div className="w-1/2 lg:text-[28px] md:text-2xl sm:text-xl tracking-wide rounded-lg border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-white active:shadow-none transition flex flex-col">
            <div className="h-2/3 lg:px-[30px] md:px-[20px] sm:px-[10px] py-[10px] bg-transparent font-gilroy-semibold text-white flex flex-row justify-center items-center">
                {text}
            </div>
            <div className="h-1/3 md:px-[30px] sm:px-[10px] py-[10px] bg-[#E1BF0E] font-gilroy-black flex flex-row justify-center items-center text-center hover:cursor-pointer" onClick={handleClick}>
                {linktext} <HiArrowRight className="ml-2" />
            </div>
        </div>
    )
}