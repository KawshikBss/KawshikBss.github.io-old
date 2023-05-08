import Link from "next/link";
import React, { useState } from "react";
import style from "./navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((curr) => !curr);
    };
    return (
        <div
            className={[
                style["navbar-container"],
                menuOpen ? style["open"] : "",
            ].join(" ")}
        >
            <div className={style["navbar-inner"]}>
                <span className={style["navbar-logo"]}>
                    <Link href={"/"} className={style["bar-logo"]}>
                        KawshikBss
                    </Link>
                </span>
                <ul
                    className={[style["navbar-items"], "hidden md:flex"].join(
                        " "
                    )}
                >
                    <li className={style["navbar-item-link"]}>
                        <Link href={"/#hero"}>
                            <span className={style["navbar-item-sym"]}>#</span>
                            home
                        </Link>
                    </li>
                    <li className={style["navbar-item-link"]}>
                        <Link href={"/#about"}>
                            <span className={style["navbar-item-sym"]}>#</span>
                            about me
                        </Link>
                    </li>
                    <li className={style["navbar-item-link"]}>
                        <Link href={"/#projects"}>
                            <span className={style["navbar-item-sym"]}>#</span>
                            works
                        </Link>
                    </li>
                    <li className={style["navbar-item-link"]}>
                        <Link href={"/#skills"}>
                            <span className={style["navbar-item-sym"]}>#</span>
                            skills
                        </Link>
                    </li>
                    <li className={style["navbar-item-link"]}>
                        <Link href={"/#contacts"}>
                            <span className={style["navbar-item-sym"]}>#</span>
                            contact me
                        </Link>
                    </li>
                </ul>
                <BiMenuAltRight
                    className={[
                        style["navbar-hamburger-btn"],
                        menuOpen ? "" : style["open"],
                    ].join(" ")}
                    onClick={toggleMenu}
                />
                <AiOutlineClose
                    className={[
                        style["navbar-hamburger-btn"],
                        menuOpen ? style["open"] : "",
                    ].join(" ")}
                    onClick={toggleMenu}
                />
            </div>
            <div
                className={[
                    style["hamburger-menu"],
                    menuOpen ? style["open"] : "",
                ].join(" ")}
            >
                <ul className={style["hamburger-item-list"]}>
                    <li
                        className={style["hamburger-item-link"]}
                        onClick={toggleMenu}
                    >
                        <Link href={"/#hero"}>
                            <span className={style["hamburger-item-sym"]}>
                                #
                            </span>
                            home
                        </Link>
                    </li>
                    <li
                        className={style["hamburger-item-link"]}
                        onClick={toggleMenu}
                    >
                        <Link href={"/#about"}>
                            <span className={style["hamburger-item-sym"]}>
                                #
                            </span>
                            about me
                        </Link>
                    </li>
                    <li
                        className={style["hamburger-item-link"]}
                        onClick={toggleMenu}
                    >
                        <Link href={"/#projects"}>
                            <span className={style["hamburger-item-sym"]}>
                                #
                            </span>
                            works
                        </Link>
                    </li>
                    <li
                        className={style["hamburger-item-link"]}
                        onClick={toggleMenu}
                    >
                        <Link href={"/#skills"}>
                            <span className={style["hamburger-item-sym"]}>
                                #
                            </span>
                            skills
                        </Link>
                    </li>
                    <li
                        className={style["hamburger-item-link"]}
                        onClick={toggleMenu}
                    >
                        <Link href={"/#contacts"}>
                            <span className={style["hamburger-item-sym"]}>
                                #
                            </span>
                            contact me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
