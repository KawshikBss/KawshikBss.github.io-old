import SideLinks from "@/components/sideLinks/SideLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="h-screen flex flex-col items-center px-[171px] mt-[62px]">
            <SideLinks />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col justify-between items-start gap-[24px]">
                    <motion.span
                        initial={{ x: "-100%" }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0 }}
                        className="font-600 text-[32px] text-white mb-[8px]"
                    >
                        Kawshik Biswas is a
                        <br />
                        <span className="text-[#C778DD]">
                            Full-Stack Developer
                        </span>
                    </motion.span>
                    <motion.span
                        initial={{ x: "-100%" }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ x: 0 }}
                        className="font-400 text-[16px] text-[#ABB2BF]"
                    >
                        He develops complex Web and Mobile applications
                    </motion.span>
                    <Link
                        href={"#"}
                        className="font-500 text-[16px] text-white px-[16px] py-[8px] border-[1px] border-[#C778DD] hover:bg-[#C778DD] ease-in-out duration-500"
                    >
                        Contact Me !!
                    </Link>
                </div>
                <div className="flex flex-col justify-between items-center relative overflow-y-hidden">
                    <motion.img  initial={{scale: 0}} transition={{duration: 0.3}} whileInView={{scale: 1}}
                        className="absolute top-10 left-20 z-0"
                        src={"Dots.png"}
                    />
                    <motion.img
                        initial={{ y: 100 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ y: 0 }}
                        className="h-[386px] object-contain z-10"
                        src={"npp.png"}
                    />
                    <motion.img  initial={{scale: 0}} transition={{duration: 0.4}} whileInView={{scale: 1}}
                        className="absolute bottom-10 right-20 z-20"
                        src={"Dots.png"}
                    />
                    <motion.span
                        initial={{ x: "-100%" }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ x: 0 }}
                        className="flex flex-row justify-start items-center w-fullpy-[8px] border-[1px] border-[#ABB2BF]"
                    >
                        <span className="block w-[16px] h-[16px] bg-[#C778DD] ml-[8px] mr-[10px]"></span>
                        <span className="font-500 text-[16px] text-[#ABB2BF] mr-10">
                            Currently Working On{" "}
                            <span className="text-white">Evolutionary</span>{" "}
                            Tech
                        </span>
                    </motion.span>
                </div>
            </div>
            <div className="flex flex-col mx-auto items-center">
                <div className="flex flex-row relative p-[32px] font-500 text-[24px] text-white border-[1px] border-white overflow-visible mt-[112px]">
                    <span className="absolute top-[-32px] left-10 text-[56px]">
                        ""
                    </span>
                    <span className="relative">
                        In Order To Survive, We Cling To All We Know And
                        Understand.
                    </span>
                    <span className="absolute bottom-[-58px] right-10 text-[56px]">
                        ""
                    </span>
                </div>
                <span className="self-end flex flex-row relative p-[16px] font-500 text-[24px] text-white border-[1px] border-white overflow-visible">
                    - Itachi Uchiha
                </span>
            </div>
        </div>
    );
}

export default Hero;
