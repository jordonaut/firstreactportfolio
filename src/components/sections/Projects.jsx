import { RevealOnScroll } from "../RevealOnScroll"
import { Link } from 'react-router-dom';
import { ProjectCard } from "../ui/ProjectCard"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent text-center">
                Featured Projects:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                    title="Boeing Virtual Airplane"
                    description="At Boeing's Learner Solution Program, I was responsible for the look & feel of its flagship product: Virtual Airplane. During that time, I implemented a design system, redesigned the flow of several features, and did some really cool work on dark mode."
                    to="/projects/virtual-airplane"
                    tags={["Design Systems", "Custom Icongraphy", "User Research", "Facilitation"]}
                    />
                    
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-semibold mb-2">Gay City Website Redesign</h3>
                    <p>As Communications Designer at Gay City I made brand-aligned visuals, campaign assets, and inclusive digital communications for Seattle’s LGBTQ+ community. My first order of business? Redesign their website.</p>
                    <div className="mb-2 p-2.5 flex items-start justify-items-center">
                        {["User Research", "CSS", "WordPress Development", "Divi"].map((tech,key) => (
                             <span key={key}
                             className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                 {tech}
                             </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-semibold mb-2">Velocity Dance Center</h3>
                    <p>My work with Story 2 allowed me to work on Velocity Dance Center's site, and do some really great research driven, results oriented, redesign work.</p>
                    <div className="mb-2 p-2.5 flex items-start justify-items-center">
                        {["Web App", "User Research", "UX Design"].map((tech,key) => (
                             <span key={key}
                             className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                 {tech}
                             </span>
                        ))}
                    </div>
                    
                </div>

            </div>

            
        </div>

    </RevealOnScroll>
    </section>
}