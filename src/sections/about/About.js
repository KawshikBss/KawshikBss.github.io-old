import Link from "next/link";
import React from "react";
import style from "./about.module.css";
import profile from "@/consts/profile";
import Image from "next/image";

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
                    <p className={style["about-info-desc"]}>{profile.about}</p>
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
                    <Image
                        src={"dots.png"}
                        width={100}
                        height={100}
                        className={style["about-image-eff"]}
                        style={{ top: "10%", left: "-15%" }}
                    />
                    <Image
                        src={profile.aboutImg}
                        width={100}
                        height={100}
                        className={style["about-image"]}
                    />
                    <Image
                        src={"dots.png"}
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
