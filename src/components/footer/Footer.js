import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <div className="flex flex-col align-center justify-between px-[170px] py-[32px] border-t-[#ABB2BF] border-t-[1px] bg-inherit">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between items-start text-white text-[16px] font-normal">
                    <span className="flex flex-row justify-between items-center gap-[28px]">
                        <span>KawshikBss</span>
                        <span className="text-[#ABB2BF]">
                            kawshikbss@gmail.com
                        </span>
                    </span>
                    <span>Full-Stack Web & Mobile App Developer</span>
                </div>
                <div className="flex flex-col justify-between items-start text-white text-[16px] font-normal">
                    <span className="text-[24px] font-[500]">Media</span>
                    <span className="flex flex-row gap-[8px] items-center justify-between text-[#ABB2BF]">
                        <Link href={'/'}>
                            <BsGithub />
                        </Link>
                        <Link href={'/'}>
                            <BsLinkedin />
                        </Link>
                        <Link href={'/'}>
                            <BsFacebook />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
