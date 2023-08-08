import profile from "@/consts/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./hero.module.css";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div
            className={[
                style["hero-container"],
                "flex-col md:flex-row w-[95%] md:w-[65%] mt-16 md:mt-0",
            ].join(" ")}
        >
            <div
                className={[style["hero-info"], "w-9/10 md:w-[55%]"].join(" ")}
            >
                <motion.h3
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={style["hero-info-heading"]}
                >
                    {profile.name} is a {profile.jobTitle}
                </motion.h3>
                <motion.p
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={style["hero-info-desc"]}
                >
                    {profile.jobDesc}
                </motion.p>
                <Link href={"/#contact"} className={"button hidden md:block"}>
                    Contact Me
                </Link>
            </div>
            <div
                className={[style["hero-images"], "w-9/10 md:w-[55%]"].join(
                    " "
                )}
            >
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={"Dots.png"}
                    width={100}
                    height={100}
                    className={style["hero-image-eff"]}
                    style={{ top: "10%", left: "10%" }}
                />
                <motion.img
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                    src={"npp.png"}
                    width={100}
                    height={100}
                    className={style["hero-image"]}
                />
                <motion.span
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={style["hero-quote"]}
                >
                    <div className={style["hero-quote-ind"]} />
                    {profile.currentWork}
                </motion.span>
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={"Dots.png"}
                    width={100}
                    height={100}
                    className={style["hero-image-eff"]}
                    style={{ zIndex: 2 }}
                />
            </div>
        </div>
    );
}

export default Hero;
