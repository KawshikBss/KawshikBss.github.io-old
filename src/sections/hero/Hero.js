import profile from "@/consts/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./hero.module.css";

function Hero() {
    return (
        <div
            className={[
                style["hero-container"],
                "flex-col md:flex-row w-full md:w-[65%] mt-16 md:mt-0",
            ].join(" ")}
        >
            <div
                className={[style["hero-info"], "w-9/10 md:w-[55%]"].join(" ")}
            >
                <h3 className={style["hero-info-heading"]}>
                    {profile.name} is a {profile.jobTitle}
                </h3>
                <p className={style["hero-info-desc"]}>{profile.jobDesc}</p>
                <Link
                    href={"/#contact"}
                    className={[
                        style["hero-contact-btn"],
                        "hidden md:block",
                    ].join(" ")}
                >
                    Contact Me
                </Link>
            </div>
            <div
                className={[style["hero-images"], "w-9/10 md:w-[55%]"].join(
                    " "
                )}
            >
                <Image
                    src={"npp.png"}
                    width={100}
                    height={100}
                    className={style["hero-image"]}
                />
                <span className={style["hero-quote"]}>
                    <div className={style["hero-quote-ind"]} />
                    {profile.currentWork}
                </span>
            </div>
        </div>
    );
}

export default Hero;
