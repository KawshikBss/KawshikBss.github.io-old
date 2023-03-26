import Skill from "@/components/skills/Skill";
import React from "react";

function Skills() {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-[171px] mt-[62px]">
            <span className="w-full flex flex-row items-center gap-[16px]">
                <span className="w-[15%] font-500 text-[32px] text-white">
                    <span className="text-[#C778DD]">#</span>skills
                </span>
                <span className="w-[60%] h-[1px] bg-[#C778DD]"></span>
            </span>
            <div className="flex flex-row justify-between items-center w-4/5 gap-[60px]">
                <img src="skillsbg.png" className="w-[40%] object-contain" />
                <div className="w-[60%] flex flex-row flex-wrap gap-[8px]">
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    );
}

export default Skills;
