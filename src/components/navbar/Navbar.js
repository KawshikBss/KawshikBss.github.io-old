import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";

function Navbar() {
    return (
        <div
            className={[style["navbar-container"], "hidden md:flex"].join(" ")}
        >
            <span className={style["navbar-logo"]}>
                <Link href={"/"} className={style["bar-logo"]}>
                    KawshikBss
                </Link>
            </span>
            <ul className={style["navbar-items"]}>
                <li className={style["navbar-item-link"]}>
                    <Link href={"/"}>
                        <span className={style["navbar-item-sym"]}>#</span>home
                    </Link>
                </li>
                <li className={style["navbar-item-link"]}>
                    <Link href={"/"}>
                        <span className={style["navbar-item-sym"]}>#</span>about
                        me
                    </Link>
                </li>
                <li className={style["navbar-item-link"]}>
                    <Link href={"/"}>
                        <span className={style["navbar-item-sym"]}>#</span>works
                    </Link>
                </li>
                <li className={style["navbar-item-link"]}>
                    <Link href={"/"}>
                        <span className={style["navbar-item-sym"]}>#</span>
                        contact me
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
