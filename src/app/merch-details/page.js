import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function merchDetails(){
    return(
        <main>
          <div className="font-bayon text-white px-5 py-10 flex flex-row">
            <div className="flex flex-col items-center">
                <p className=" leading-[50px] text-[50px]">XTASY</p>
                <p className=" leading-[40px] text-[40px] font-bold tracking-wide">2024</p>
            </div>
          </div>
          <div className="min-h-[calc(100vh-112px-170px)] flex flex-col px-[100px]">
            <p className="h-1/6 max-w-max text-[28px] leading-[32px] text-white font-gilroy font-bold shadow-[inset_0px_-12px_0px_0px_rgba(0,0,0,1)] shadow-[#F0E132]">To win a free Xtasy Merch, complete these task and mention us on Instagram</p>
            <ol className="h-2/3 list-decimal list-inside font-poppins text-2xl text-white py-[20px]">
                <li className="mx-2 my-5">If the fest was a meme what would it be? Share your funniest creation in story!</li>
                <li className="mx-2 my-5">Friendship goals activated! Who would you drag along to the fest for the most epic memories: Your BFF, your Crush, or your Squad?</li>
                <li className="mx-2 my-5">If you could swap roles with one of the performers or organizers for a day, who would it be and why?</li>
                <li className="mx-2 my-5">Admit one embarrassing thing you've done at a past college fest. (We won't judge... probably.)</li>
                <li className="mx-2 my-5">Bragging rights on the line! Which department do you think will win the most fest competitions this year?</li>
                <li className="mx-2 my-5">If you could describe this cultural fest in three words, what would they be?</li>
            </ol>
            <p className="h-1/6 text-[28px] text-[#B59AFF] font-gilroy font-bold">Answer these few question, and post it as instagram story mentioning “xtasy.outr” and stand a chance of winning the Xtasy merch!</p>
          </div>
          <div className="flex flex-row justify-center px-5 py-10 gap-3">
                <a href="https://www.youtube.com/@xtasyoutr" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaYoutube color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaXTwitter color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaInstagram color="white" size={20}/></a>
          </div>
        </main>
    )
}