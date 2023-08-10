import React from "react";
import style from "./skills.module.css";
import Image from "next/image";
import skills from "@/consts/skills";
import { motion } from "framer-motion";

function Skills() {
    return (
        <div className="section-container">
            <div className="section-heading">
                <div className="section-heading-inner">
                    <h5 className="section-heading-inner-text">
                        <span className="section-heading-inner-sym">#</span>
                        skills
                    </h5>
                    <div className="section-heading-inner-line" />
                </div>
            </div>
            <div className={style["skills-inner"]}>
                <Image
                    src={"skillsbg.png"}
                    width={100}
                    height={100}
                    className={style["skills-bg"]}
                    alt="skillsbg"
                />
                <div className={style["skills-list"]}>
                    <div className={style["skills-list-col"]}>
                        <motion.div
                            initial={{ x: "100%" }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.4 }}
                            className={style["skills-list-item"]}
                        >
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                {skills?.languages &&
                                    skills.languages.map((item, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={
                                                    style["skill-set-item"]
                                                }
                                            >
                                                {item}
                                            </span>
                                        );
                                    })}
                            </div>
                        </motion.div>
                    </div>
                    <div className={style["skills-list-col"]}>
                        <motion.div
                            initial={{ x: "100%" }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={style["skills-list-item"]}
                        >
                            <span className={style["skill-category"]}>
                                Frameworks & Libraries
                            </span>
                            <div className={style["skill-sets"]}>
                                {skills?.frameworks &&
                                    skills.frameworks.map((item, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={
                                                    style["skill-set-item"]
                                                }
                                            >
                                                {item}
                                            </span>
                                        );
                                    })}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: "100%" }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={style["skills-list-item"]}
                        >
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                <span className={style["skill-set-item"]}>
                                    Lorem
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Lorem
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Lorem
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Lorem
                                </span>
                            </div>
                        </motion.div>
                    </div>
                    <div className={style["skills-list-col"]}>
                        <motion.div
                            initial={{ x: 100 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={style["skills-list-item"]}
                        >
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                <span className={style["skill-set-item"]}>
                                    Laborum
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Laborum
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={style["skills-list-item"]}
                        >
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                <span className={style["skill-set-item"]}>
                                    Officia
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Officia
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Officia
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
