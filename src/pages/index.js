import About from "@/sections/about/About";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";

export default function Home() {
    return (
        <>
            <div className="section">
                <Hero />
            </div>
            <div className="section">
                <About />
            </div>
            <div className="section">
                <Projects />
            </div>
        </>
    );
}
