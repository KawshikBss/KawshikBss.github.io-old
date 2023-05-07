import Link from "next/link";
import React from "react";
import style from "./projects.module.css";
import Project from "@/components/project/Project";

function Projects() {
    return (
        <div className="section-container">
            <div className="section-heading">
                <div className="section-heading-inner">
                    <h5 className="section-heading-inner-text">
                        <span className="section-heading-inner-sym">#</span>
                        projects
                    </h5>
                    <div className="section-heading-inner-line" />
                </div>
                <Link href={"/"} className="section-heading-btn">
                    View All
                </Link>
            </div>
            <div className={style["projects-inner"]}>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
}

export default Projects;
