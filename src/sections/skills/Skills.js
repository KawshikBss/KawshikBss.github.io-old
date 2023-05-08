import React from "react";
import style from "./skills.module.css";
import Image from "next/image";

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
                        <div className={style["skills-list-item"]}>
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                <span className={style["skill-set-item"]}>
                                    excepteur
                                </span>
                                <span className={style["skill-set-item"]}>
                                    excepteur
                                </span>
                                <span className={style["skill-set-item"]}>
                                    excepteur
                                </span>
                                <span className={style["skill-set-item"]}>
                                    excepteur
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style["skills-list-col"]}>
                        <div className={style["skills-list-item"]}>
                            <span className={style["skill-category"]}>
                                Languages
                            </span>
                            <div className={style["skill-sets"]}>
                                <span className={style["skill-set-item"]}>
                                    Consectetur
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Consectetur
                                </span>
                                <span className={style["skill-set-item"]}>
                                    Consectetur
                                </span>
                            </div>
                        </div>
                        <div className={style["skills-list-item"]}>
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
                        </div>
                    </div>
                    <div className={style["skills-list-col"]}>
                        <div className={style["skills-list-item"]}>
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
                        </div>
                        <div className={style["skills-list-item"]}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
