import About from "@/sctions/about/About";
import Contact from "@/sctions/contact/Contact";
import Hero from "@/sctions/hero/Hero";
import Projects from "@/sctions/projects/Projects";
import Skills from "@/sctions/skills/Skills";

export default function Home() {
    return (
        <div className="w-screen h-screen bg-inherit overflow-x-hidden snap-mandatory snap-y">
            <section className="snap-center">
                <Hero />
            </section>
            <section className="snap-center">
                <About />
            </section>
            <section className="snap-center">
                <Projects />
            </section>
            <section className="snap-center">
                <Skills />
            </section>
            <section className="snap-center">
                <Contact />
            </section>
        </div>
    );
}
