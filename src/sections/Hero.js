import profile from "@/consts/profile";
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
        </div>
    );
}

export default Hero;
