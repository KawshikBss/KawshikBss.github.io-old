import React from "react";
import { motion } from "framer-motion";

function Skill({ index, type }) {
    return (
        <motion.div
            initial={{ x: 200 }}
            transition={{ duration: 0.5 * (index + 1) }}
            whileInView={{ x: 0 }}
            className="w-[178px] border-white border-[1px] flex flex-col justify-between items-start"
        >
            <span className="w-full p-[8px] border-b-[1px] border-white font-600 text-[16px] text-white">
                {type ? type : "Skill"}
            </span>
            <div className="w-full p-[8px] flex flex-row flex-wrap gap-[8px] font-400 text-[16px] text-[#ABB2BF]">
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
            </div>
        </motion.div>
    );
}

export default Skill;
