import React from "react";
import Navbar from "../navbar/Navbar";

function DefaultLayout({ children }) {
    return (
        <div className="layout-container">
            <Navbar />
            {children}
        </div>
    );
}

export default DefaultLayout;
