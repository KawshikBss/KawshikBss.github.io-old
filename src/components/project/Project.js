import React from "react";
import style from "./project.module.css";
import Image from "next/image";
import Link from "next/link";

function Project() {
    return (
        <div className={style["project-container"]}>
            <Link href={"/"} className={style["project-thumbnail-container"]}>
                <Image
                    src={"project1.png"}
                    height={100}
                    width={100}
                    className={style["project-thumbnail"]}
                />
            </Link>
            <span className={style["project-tech-list"]}>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
                <span className={style["project-tech-list-item"]}>HTML</span>
            </span>
            <div className={style["project-info"]}>
                <h3 className={style["project-info-title"]}>
                    Alvita Nutrition
                </h3>
                <p className={style["project-info-desc"]}>
                    Magna reprehenderit adipisicing.
                </p>
                <Link href={"/"} className="button">
                    Live
                </Link>
            </div>
        </div>
    );
}

export default Project;
