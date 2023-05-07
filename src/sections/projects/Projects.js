import React from "react";

function Projects() {
    return (
        <div className="section-container">
            <div className="section-heading">
                <div className="section-heading-inner">
                    <h5 className="section-heading-inner-text">
                        <span className="section-heading-inner-sym">#</span>
                        my-works
                    </h5>
                    <div className="section-heading-inner-line" />
                </div>
                <Link href={"/"} className="section-heading-btn">
                    View All
                </Link>
            </div>
        </div>
    );
}

export default Projects;
