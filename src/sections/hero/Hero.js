import profile from "@/consts/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./hero.module.css";

function Hero() {
    return (
        <div className={style["hero-container"]}>
            <div className={style["hero-info"]}>
                <h3 className={style["hero-info-heading"]}>
                    {profile.name} is a {profile.jobTitle}
                </h3>
                <p className={style["hero-info-desc"]}>{profile.jobDesc}</p>
                <Link href={"/#contact"}>
                    <span className={style["hero-contact-btn"]}>
                        Contact Me
                    </span>
                </Link>
            </div>
            <div className={style["hero-images"]}>
                <Image
                    src={"npp.png"}
                    width={100}
                    height={100}
                    className={style["hero-image"]}
                />
                <span className={style["hero-quote"]}>
                    <span className={style["hero-quote-ind"]} />
                    {profile.currentWork}
                </span>
            </div>
        </div>
    );
}

export default Hero;
