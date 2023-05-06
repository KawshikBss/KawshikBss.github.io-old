import profile from "@/consts/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-info">
                <h3 className="hero-info-heading">
                    {profile.name} is a {profile.jobTitle}
                </h3>
                <p className="hero-info-desc">{profile.jobDesc}</p>
                <Link href={"/#contact"}>
                    <span className="hero-contact-btn">Contact Me</span>
                </Link>
            </div>
            <div className="hero-images">
                <Image
                    src={"npp.png"}
                    width={100}
                    height={100}
                    className="hero-image"
                />
                <span className="hero-quote">
                    <span className="hero-quote-ind" />
                    {profile.currentWork}
                </span>
            </div>
        </div>
    );
}

export default Hero;
