import Link from "next/link";
import React from "react";

function Header() {
    return (
        <div className="flex flex-row justify-between items-center px-[170px] pt-[32px] pb-[8px] text-white text-[16px] font-500 absolute w-full">
            <span className="font-700">KawshikBss</span>
            <span className="flex flex-row justify-between items-center gap-[32px] text-[#ABB2BF]">
                <Link href={"#"} className=" hover:text-white ease-in-out duration-500">
                    <span className="text-[#C778DD]">#</span>home
                </Link>
                <Link href={"#"} className=" hover:text-white ease-in-out duration-500">
                    <span className="text-[#C778DD]">#</span>about me
                </Link>
                <Link href={"#"} className=" hover:text-white ease-in-out duration-500">
                    <span className="text-[#C778DD]">#</span>my works
                </Link>
                <Link href={"#"} className=" hover:text-white ease-in-out duration-500">
                    <span className="text-[#C778DD]">#</span>get in touch
                </Link>
            </span>
        </div>
    );
}

export default Header;
