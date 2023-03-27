import Skill from "@/components/skills/Skill";
import React from "react";
import { motion } from "framer-motion";

function Skills() {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-[171px] mt-[62px]">
            <span className="w-full flex flex-row items-center gap-[16px]">
                <motion.span
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="w-[15%] font-500 text-[32px] text-white"
                >
                    <span className="text-[#C778DD]">#</span>skills
                </motion.span>
                <motion.span
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ width: "60%" }}
                    className="w-[60%] h-[1px] bg-[#C778DD]"
                ></motion.span>
            </span>
            <div className="flex flex-row justify-between items-center w-4/5 gap-[60px]">
                <motion.img
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ scale: 1 }}
                    src="skillsbg.png"
                    className="w-[40%] object-contain"
                />
                <div className="w-[60%] flex flex-row flex-wrap gap-[8px]">
                    <Skill index={0} />
                    <Skill index={1} />
                    <Skill index={2} />
                    <Skill index={3} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
