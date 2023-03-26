import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-[171px] mt-[62px]">
            <div className="w-full flex flex-row justify-between gap-[170px] overflow-visible">
                <div className="w-1/2 flex flex-col justify-between items-start gap-[23px]">
                    <span className="w-full flex flex-row justify-between items-center gap-[16px]">
                        <motion.span
                            initial={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ scale: 1 }}
                            className="w-[40%] font-500 text-[32px] text-white"
                        >
                            <span className="text-[#C778DD]">#</span>about-me
                        </motion.span>
                        <motion.span
                            initial={{ width: "0%" }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ width: "60%" }}
                            className="w-[60%] h-[1px] bg-[#C778DD]"
                        ></motion.span>
                    </span>
                    <motion.p
                        initial={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0 }}
                        className="w-full font-400 text-[16px] text-[#ABB2BF]"
                    >
                        Culpa cupidatat aliquip laboris elit incididunt
                        incididunt magna elit non duis cillum exercitation
                        tempor eiusmod. Cupidatat officia id do qui excepteur ad
                        minim velit veniam aliquip eu commodo. Pariatur aliqua
                        id proident sint in sunt magna minim duis Lorem
                        reprehenderit. Eiusmod proident cupidatat sit sint
                        veniam enim amet ipsum. Consequat Lorem aliquip enim
                        aliquip reprehenderit enim id pariatur esse ut nulla
                        cupidatat ipsum. Nostrud amet ea culpa elit dolore.
                        Culpa eu reprehenderit Lorem irure excepteur occaecat
                        sit nostrud tempor fugiat Lorem est velit.
                    </motion.p>
                    <Link
                        href={"/"}
                        className="flex flex-row justify-between items-center gap-[8px] px-[16px] py-[8px] text-[16px] text-white font-500 border-[1px] border-[#C778DD] hover:bg-[#C778DD] ease-in-out duration-500"
                    >
                        Read More
                        <BsArrowRight />
                    </Link>
                </div>
                <div className="flex flex-col justify-between items-center relative overflow-visible border-b-[1px] border-[#C778DD]">
                    <motion.img
                        initial={{ scale: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ scale: 1 }}
                        className="absolute top-10 left-[-40px] z-20"
                        src={"Dots.png"}
                    />
                    <motion.img
                        initial={{ x: 100 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0 }}
                        className="h-[386px] object-contain z-10 rounded-lg"
                        src={"about.JPG"}
                    />
                    <motion.img
                        initial={{ scale: 0 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ scale: 1 }}
                        className="absolute top-20 right-10 z-20"
                        src={"Dots.png"}
                    />
                    <motion.img
                        initial={{ scale: 0 }}
                        transition={{ duration: 0.6 }}
                        whileInView={{ scale: 1 }}
                        className="absolute bottom-10 right-[-40px] z-20"
                        src={"Dots.png"}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
