import React from "react";
import style from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Project({ project, index = 0 }) {
    return (
        <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.2 + index * 0.4 }}
            className={style["project-container"]}
        >
            <Link href={"/"} className={style["project-thumbnail-container"]}>
                <Image
                    src={"project1.png"}
                    height={100}
                    width={100}
                    className={style["project-thumbnail"]}
                    alt="project image"
                />
            </Link>
            <span className={style["project-tech-list"]}>
                {project?.technologies &&
                    project.technologies.map((item, index) => {
                        return (
                            <span
                                key={index}
                                className={style["project-tech-list-item"]}
                            >
                                {item}
                            </span>
                        );
                    })}
            </span>
            <div className={style["project-info"]}>
                <h3 className={style["project-info-title"]}>
                    {project?.title && project?.title}
                </h3>
                <p className={style["project-info-desc"]}>
                    {project?.short_desc && project?.short_desc}
                </p>
                <Link
                    href={
                        project?.project_link
                            ? project?.project_link
                            : project?.live_link
                            ? project?.live_link
                            : "/"
                    }
                    className="button"
                >
                    {project?.project_link
                        ? "Project Link"
                        : project?.live_link
                        ? "Live"
                        : ">"}
                </Link>
            </div>
        </motion.div>
    );
}

export default Project;
