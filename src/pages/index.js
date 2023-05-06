import About from "@/sections/about/About";
import Hero from "@/sections/hero/Hero";

export default function Home() {
    return (
        <>
            <div className="section">
                <Hero />
            </div>
            <div className="section">
                <About />
            </div>
        </>
    );
}
