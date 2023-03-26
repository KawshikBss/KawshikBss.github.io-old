import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Card({ index = 0 }) {
    return (
        <motion.div
            initial={{ y: 200 }}
            transition={{ duration: 0.5 * (index + 1) }}
            whileInView={{ y: 0 }}
            className="w-[320px] flex flex-col border-[1px] border-white font-400 text-[16px] text-[#ABB2BF]"
        >
            <img
                className="w-[320px] h-[200px] object-cover"
                src="project1.png"
            />
            <span className="w-full p-[8px] border-[1px] border-white flex flex-row justify-start items-center gap-[6px] flex-wrap">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Laravel</span>
                <span>JSX</span>
                <span>CSS</span>
            </span>
            <div className="p-[16px] flex flex-col justify-between items-start gap-[16px]">
                <span className="text-white font-500 text-[24px]">
                    Alvitanutrition.com
                </span>
                <span>A pharmaceutical ecommerce and blog site</span>
                <Link
                    href={"/"}
                    className="font-500 text-white py-[8px] px-[16px] border-[1px] border-[#C778DD] hover:bg-[#C778DD] ease-in-out duration-500"
                >
                    Visit
                </Link>
            </div>
        </motion.div>
    );
}

export default Card;
