import Link from "next/link";
import React from "react";
import { RiMailUnreadLine, RiDiscordFill } from "react-icons/ri";

function Contact() {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-[171px] mt-[62px] relative">
            <span className="w-full flex flex-row justify-start items-center mb-[45px]">
                <span className="w-[20%] font-500 text-[32px] text-white">
                    <span className="text-[#C778DD]">#</span>contact
                </span>
                <span className="w-[60%] h-[1px] bg-[#C778DD]"></span>
            </span>
            <div className="w-full flex flex-row justify-between items-start">
                <p className="font-500 text-[16px] text-[#ABB2BF]">
                    Anim ad magna sunt nostrud ipsum do.Aute excepteur officia
                    culpa dolore do culpa.
                </p>
                <div className="flex flex-col items-start gap-[8px] p-[16px] font-400 text-[16px] text-[#ABB2BF] border-[1px] border-white">
                    <span className="font-600 text-white">Message Me Here</span>
                    <Link
                        href={"/"}
                        className="flex flex-row justify-start items-center gap-[8px]"
                    >
                        <RiMailUnreadLine />
                        kawshikbss@gmail.com
                    </Link>
                    <Link
                        href={"/"}
                        className="flex flex-row justify-start items-center gap-[8px]"
                    >
                        <RiDiscordFill />
                        #Zilch
                    </Link>
                </div>
            </div>
                <img src="dots.png" className="absolute top-50 left-[-30px]" />
        </div>
    );
}

export default Contact;
