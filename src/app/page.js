import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  //inset 0 10px 15px 0px rgba(0, 0, 0, 0.3)
  return (
    <main>
      <div>
        <div className="flex flex-row justify-between font-gilroy text-3xl text-white tracking-wide pt-5 px-5">
          <div className="flex flex-col">
            <span>Website</span>
            <span>Under</span>
            <span>Construction</span>
          </div>
          <div className="flex flex-col text-right">
            <span>Xtasy 2024</span>
            <span>Social handles</span>
            <div className="flex flex-row-reverse gap-3 mt-5 z-10">
                <a href="https://www.youtube.com/@xtasyoutr" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaYoutube color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaXTwitter color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaInstagram color="white" size={20}/></a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center overflow-hidden ">
          <div className="w-[500rem] text-[40px] leading-[80px] font-akira bg-[#F0E132] rotate-[15deg] translate-y-[290px] -z-10">STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED</div>
          <div className="flex flex-col items-center font-bayon text-white">
            <p className="leading-[250px] text-[318px]">XTASY</p>
            <p className="leading-[250px] text-[260px] font-bold tracking-wide">2024</p>
          </div>
          <p className="text-[28px] leading-[30px] text-white font-gilroy italic">While you wait, click below for to win a free Xtasy merchandise</p>
          <div className="w-[500rem] text-[40px] leading-[80px] font-akira bg-[#F0E132] -rotate-[15deg] -translate-y-[320px] shadow-[inset_0_10px_15px_0px_rgba(0,0,0,0.3)]"> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
        </div>
        <div className="flex flex-row justify-center">
          <Link href='/merch-details'><button className="px-[18px] py-[10px] text-[28px] text-white font-gilroy font-semibold rounded-lg bg-transparent border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-white active:shadow-none transition">Free Merch!</button></Link>
        </div>
      </div>
    </main>
  );
}
