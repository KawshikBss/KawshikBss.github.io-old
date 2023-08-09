import React from "react";
import style from "./contacts.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

function Contacts() {
    return (
        <div className="section-container">
            <div className="section-heading">
                <div className="section-heading-inner">
                    <h5 className="section-heading-inner-text">
                        <span className="section-heading-inner-sym">#</span>
                        contacts
                    </h5>
                    <div className="section-heading-inner-line" />
                </div>
            </div>
            <div className={style["contacts-inner"]}>
                <div className={style["contacts-desc"]}>
                    Adipisicing ad mollit voluptate laboris aute velit amet non
                    nostrud id tempor dolore aliquip voluptate. Sit in in
                    laboris ut Lorem deserunt irure officia culpa laborum.
                </div>
                <div className={style["contacts-list"]}>
                    <span className={style["contacts-list-heading"]}>
                        Message Me Here
                    </span>
                    <span className={style["contacts-list-item"]}>
                        <MdEmail />
                        kawshikbss@gmail.com
                    </span>
                    <Link
                        href="https://www.linkedin.com/in/kawshikbss/"
                        className={style["contacts-list-item"]}
                    >
                        <AiFillLinkedin />
                        linkedin.com/in/kawshikbss/
                    </Link>
                    <Link
                        href="https://github.com/KawshikBss"
                        className={style["contacts-list-item"]}
                    >
                        <AiFillGithub />
                        github.com/KawshikBss
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
