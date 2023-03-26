import Card from "@/components/projects/Card";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Projects() {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-[171px]">
            <span className="w-full flex flex-row justify-between items-center gap-[16px]">
                <motion.span
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="w-[20%] font-500 text-[32px] text-white"
                >
                    <span className="text-[#C778DD]">#</span>
                    my-projects
                </motion.span>
                <motion.span
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ width: "60%" }}
                    className="w-[60%] h-[1px] bg-[#C778DD]"
                ></motion.span>

                <Link
                    href={"/"}
                    className="flex flex-row justify-between items-center gap-[8px] text-[16px] text-white font-500"
                >
                    View All
                    <BsArrowRight />
                </Link>
            </span>
            <div className="flex flex-row justify-between items-start gap-[16px] mt-[48px] overflow-y-hidden">
                <Card index={0} />
                <Card index={1} />
                <Card index={2} />
            </div>
        </div>
    );
}

export default Projects;
