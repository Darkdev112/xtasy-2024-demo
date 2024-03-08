import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function merchDetails(){
    return(
        <main>
          <div className="text-white md:p-10 sm:p-5 flex flex-row">
            <div className="flex flex-col items-center">
                <p className=" md:leading-[40px] md:text-[50px] sm:leading-[30px] sm:text-[35px] font-bayon">XTASY</p>
                <p className=" md:leading-[30px] md:text-[30px] sm:leading-[21px] sm:text-[21px] font-akira">2024</p>
            </div>
          </div>
          <div className="md:min-h-[calc(100vh-112px-170px)] sm:min-h-[calc(100vh-112px-90px)] flex flex-col md:px-[100px] sm:px-5">
            <p className="h-1/6 max-w-max md:text-[28px] md:leading-[40px] sm:text-[24px] sm:leading-[36px] text-[#E7D60A] font-gilroy font-bold underline md:underline-offset-[10px] sm:underline-offset-[8px]">To win a free Xtasy Merch, complete these task and mention us on Instagram</p>
            <ol className="h-2/3 list-decimal list-inside font-poppins md:text-2xl sm:text-xl text-white py-[20px]">
                <li className="mx-2 my-5">If the fest was a meme what would it be? Share your funniest creation in story!</li>
                <li className="mx-2 my-5">Friendship goals activated! Who would you drag along to the fest for the most epic memories: Your BFF, your Crush, or your Squad?</li>
                <li className="mx-2 my-5">If you could swap roles with one of the performers or organizers for a day, who would it be and why?</li>
                <li className="mx-2 my-5">Admit one embarrassing thing you've done at a past college fest. (We won't judge... probably.)</li>
                <li className="mx-2 my-5">Bragging rights on the line! Which department do you think will win the most fest competitions this year?</li>
                <li className="mx-2 my-5">If you could describe this cultural fest in three words, what would they be?</li>
            </ol>
            <p className="h-1/6 md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[28px] text-[#B59AFF] font-gilroy font-bold">Answer these few question, and post it as instagram story mentioning “xtasy.outr” and stand a chance of winning the Xtasy merch!</p>
          </div>
          <div className="flex flex-row justify-center px-5 py-10 gap-3">
                <a href="https://www.youtube.com/@xtasyoutr" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaYoutube color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaXTwitter color="white" size={20}/></a>
                <a href="https://www.instagram.com/xtasy.outr/" target="__blank" className="bg-black rounded-[6px] p-[6px] hover:cursor-pointer"><FaInstagram color="white" size={20}/></a>
          </div>
        </main>
    )
}