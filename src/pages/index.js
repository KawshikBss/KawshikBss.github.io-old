import About from "@/sctions/about/About";
import Contact from "@/sctions/contact/Contact";
import Hero from "@/sctions/hero/Hero";
import Projects from "@/sctions/projects/Projects";
import Skills from "@/sctions/skills/Skills";

export default function Home() {
    return (
        <>
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            <section id="about" className="snap-center">
                <About />
            </section>
            <section id="projects" className="snap-center">
                <Projects />
            </section>
            <section id="skills" className="snap-center">
                <Skills />
            </section>
            <section id="contact" className="snap-center">
                <Contact />
            </section>
        </>
    );
}
