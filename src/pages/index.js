import About from "@/sections/about/About";
import Contacts from "@/sections/contacts/Contacts";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";

export default function Home() {
    return (
        <>
            <div id="hero" className="section">
                <Hero />
            </div>
            <div id="about" className="section">
                <About />
            </div>
            <div id="projects" className="section">
                <Projects />
            </div>
            <div id="skills" className="section">
                <Skills />
            </div>
            <div id="contacts" className="section">
                <Contacts />
            </div>
        </>
    );
}
