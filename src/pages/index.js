import About from "@/sections/about/About";
import Contacts from "@/sections/contacts/Contacts";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";

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
            <div className="section">
                <Skills />
            </div>
            <div className="section">
                <Contacts />
            </div>
        </>
    );
}
