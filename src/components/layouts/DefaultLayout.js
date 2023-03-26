import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function DefaultLayout({ children }) {
    return (
        <div className="w-screen h-screen bg-[#282C33]">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
