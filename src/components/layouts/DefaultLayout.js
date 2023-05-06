import React from "react";
import Navbar from "../navbar/Navbar";

function DefaultLayout({ children }) {
    return (
        <div className="snap-mandatory h-[100vh] snap-y">
            <Navbar />
            {children}
        </div>
    );
}

export default DefaultLayout;
