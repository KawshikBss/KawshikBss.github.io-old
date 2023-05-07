import React, { useState } from "react";
import style from "./carousel.module.css";
import { AiFillCaretLeft } from "react-icons/ai";

function Carousel({ children }) {
    const [currentPos, setCurrentPos] = useState(0);
    const xOffset = 90;
    const next = () => {
        setCurrentPos((curr) => {
            if (curr + 1 >= children.length) {
                return 0;
            }
            return curr + 1;
        });
    };
    return (
        <div className={style["carousel-container"]}>
            <div
                className={style["carousel-items"]}
                style={{ right: `-${currentPos * xOffset}vw` }}
            >
                {children}
            </div>
            <span className={style["carousel-btn"]} onClick={next}>
                <AiFillCaretLeft className={style["carousel-btn-inner"]} />
            </span>
        </div>
    );
}

export default Carousel;
