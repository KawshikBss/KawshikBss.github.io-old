import Link from "next/link";
import React from "react";
import style from "./about.module.css";
import profile from "@/consts/profile";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="section-container">
            <div className="section-heading">
                <div className="section-heading-inner">
                    <h5 className="section-heading-inner-text">
                        <span className="section-heading-inner-sym">#</span>
                        about-me
                    </h5>
                    <div className="section-heading-inner-line" />
                </div>
                <Link href={"/"} className="section-heading-btn">
                    View All
                </Link>
            </div>
            <div
                className={[
                    style["about-inner"],
                    "flex-col md:flex-row w-full md:w-[65%] mt-16 md:mt-0",
                ].join(" ")}
            >
                <div
                    className={[style["about-info"], "w-9/10 md:w-[55%]"].join(
                        " "
                    )}
                >
                    <motion.p
                        initial={{ y: "-100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={style["about-info-desc"]}
                    >
                        {profile.about}
                    </motion.p>
                    <Link href={"/"} className="button">
                        Read more
                    </Link>
                </div>
                <div
                    className={[
                        style["about-images"],
                        "w-9/10 md:w-[35%]",
                    ].join(" ")}
                >
                    <motion.img
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                        src={"Dots.png"}
                        width={100}
                        height={100}
                        className={style["about-image-eff"]}
                        style={{ top: "10%", left: "-15%" }}
                    />
                    <motion.img
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [1, 0.5, 1] }}
                        transition={{ duration: 0.8 }}
                        src={profile.aboutImg}
                        width={100}
                        height={100}
                        className={style["about-image"]}
                    />
                    <motion.img
                        initial={{ x: "100%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                        src={"Dots.png"}
                        width={100}
                        height={100}
                        className={style["about-image-eff"]}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
