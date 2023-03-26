import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function SideLinks() {
    return (
        <div className="flex flex-col justify-between items-center gap-[8px] text-[#ABB2BF] text-[23px] absolute top-0 left-10">
            <span className="h-[190px] w-[1px] bg-[#ABB2BF]"></span>
            <Link href={"/"}>
                <BsGithub />
            </Link>
            <Link href={"/"}>
                <BsLinkedin />
            </Link>
            <Link href={"/"}>
                <BsFacebook />
            </Link>
        </div>
    );
}

export default SideLinks;
