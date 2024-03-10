import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Portal from "@/components/button";

export default function Home() {
  return (
    <section>
        <div className="flex flex-row justify-between font-gilroy md:text-2xl sm:text-xl text-white tracking-wide md:pt-10 md:px-10 sm:pt-5 sm:px-5">
          <div className="flex flex-col">
            <span>Website</span>
            <span>Under</span>
            <span>Construction</span>
          </div>
          <div className="flex flex-col text-right">
            <span>Xtasy 2024</span>
            <span>Social handles</span>
            <div className="flex flex-row-reverse md:gap-3 sm:gap-1 md:mt-5 sm:mt-3 z-10">
              <a href="https://www.youtube.com/@xtasyoutr" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaYoutube color="white" className="lg:text-[20px] md:text-[18px] sm:text-[15px]" /></a>
              <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaXTwitter color="white" className="lg:text-[20px] md:text-[18px] sm:text-[15px]" /></a>
              <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaInstagram color="white" className="lg:text-[20px] md:text-[18px] sm:text-[15px]" /></a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center overflow-hidden lg:my-0 md:my-10 sm:my-20">
          <div className="w-[500rem] lg:text-[40px] lg:leading-[60px] md:text-[35px] md:leading-[50px] sm:text-[35px] sm:leading-[40px] font-akira bg-[#E1BF0E] md:rotate-[12deg] sm:rotate-[20deg] lg:translate-y-[210px] md:translate-y-[175px] sm:translate-y-[110px] -z-10">STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED STAY TUNED</div>
          <div className="flex flex-col justify-center items-center text-white">
            <p className="lg:leading-[180px] lg:text-[300px] md:leading-[150px] md:text-[250px] sm:leading-[90px] sm:text-[150px] font-bayon">XTASY</p>
            <p className="lg:leading-[180px] lg:text-[180px] md:leading-[150px] md:text-[150px] sm:leading-[90px] sm:text-[90px] font-akira">2024</p>
          </div>
          <div className="w-[500rem] lg:text-[40px] lg:leading-[60px] md:text-[35px] md:leading-[50px] sm:text-[35px] sm:leading-[40px] font-akira bg-[#E1BF0E] md:-rotate-[12deg] sm:-rotate-[20deg] lg:-translate-y-[210px] md:-translate-y-[175px] sm:-translate-y-[110px] shadow-[inset_0_10px_15px_0px_rgba(0,0,0,0.3)]"> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
        </div>
        <div className="flex flex-row justify-center items-center lg:-mt-[40px] md:-mt-[60px] sm:-mt-[80px]">
          <p className="lg:w-auto sm:w-3/4 font-gilroy italic lg:text-[28px] md:text-2xl sm:text-xl text-white text-center">While you wait</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-[40px] px-5">
          <div className="lg:w-[600px] md:w-[500px] sm:w-[400px] flex flex-row md:gap-[60px] sm:gap-[20px]">
            <Portal text="Get Your Merch Ready!" linktext="Shop Now" link="https://forms.fillout.com/t/bVtN3CECGfus"/>
            <Portal text="Get a chance to win a FREE MERCH !" linktext="Explore" link="/merch-details"/>
          </div>
        </div>
    </section>
  );
}
