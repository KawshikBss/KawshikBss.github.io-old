import React from "react";
import style from "./carousel.module.css";
import { AiFillCaretRight } from "react-icons/ai";

function Carousel({ children }) {
    return (
        <div className={style["carousel-container"]}>
            <div className={style["carousel-items"]}>{children}</div>
            <span className={style["carousel-btn"]}>
                <AiFillCaretRight />
            </span>
        </div>
    );
}

export default Carousel;
