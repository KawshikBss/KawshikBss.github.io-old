import React from "react";
import style from "./contacts.module.css";

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
                    Mollit eiusmod eiusmod ipsum dolor. Proident anim aliqua qui
                    occaecat dolor dolor culpa Lorem ea cupidatat. Aliqua magna
                    sit cillum ea cillum dolore ipsum esse elit excepteur sunt
                    proident nisi. Excepteur esse deserunt magna voluptate
                    exercitation occaecat dolor proident ea nisi officia do.
                </div>
                <div className={style["contacts-list"]}>
                    <span className={style["contacts-list-heading"]}>
                        Message Me Here
                    </span>
                    <span className={style["contacts-list-item"]}>
                        kawshikbss@gmail.com
                    </span>
                    <span className={style["contacts-list-item"]}>
                        kawshikbss@gmail.com
                    </span>
                    <span className={style["contacts-list-item"]}>
                        kawshikbss@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
