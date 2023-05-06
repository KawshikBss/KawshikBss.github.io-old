import Link from "next/link";
import React from "react";

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
        </div>
    );
}

export default About;
