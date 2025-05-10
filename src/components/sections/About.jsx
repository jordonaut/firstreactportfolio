import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    
        const uxSkills = ["UX Research", "Community-Centered Design", "Accessibility", "Inclusive Design", "Interaction Design", "Visual Design", "Design Systems", "Service Design", "Facilitation", "Stakeholder Alignment"]
        const codeSkills = ["Semantic HTML", "Modular CSS", "Mobile-First Design", "ARIA", "Keyboard Nav", "React (Vite, JSX, Hooks)", "Tailwind CSS", "CSS Custom Properties", "Dynamic UI"]
    
    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent text-center">
                About Me:</h2>

            <div className="rounded-xl p-6 mb-6 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-200">
                    I'm a Designer who codes. I like to help people do good. I like well-crafted products and tools that make the world a better place. 
                </p>
                </div>
                <div className="grid grid-cols md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl font-bold mb-4">UX Design</h3>
                        <div className="flex flex-wrap gap-2">
                        {uxSkills.map((tech, key) => (
                            <span key={key}
                            className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                {tech}
                            </span>
                        ))}
                        </div>
                    </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-4">Designing in Code</h3>
                    <div className="flex flex-wrap gap-2">
                    {codeSkills.map((tech, key) => (
                        <span key={key}
                        className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>
                </div>
            </div>

            <div className="rounded-xl p-6 pb-3 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-6"> Recent Work Experience </h3>
                    <div className="p-4 mb-0 space-y-2 text-gray-100">
                        <h4 className="font-semibold mb-0">UX Product Designer at Boeing</h4>
                            <h5>Training Solutions' Virtual Airplane, 2023 - 2025</h5>
                            <p>Led UX design for Boeing’s flagship Virtual Airplane product, crafting interactive overlays and component-based workflows for student pilots and instructors.</p>
                            <p>Scaled a reusable design system that accelerated development across seven internal applications and improved consistency team-wide.</p>
                    </div>
                    <div className="p-4 mb-0 space-y-2 text-gray-100">
                        <h4 className="font-semibold mb-0">Lead Designer at Story 2 Designs</h4>
                            <h5 className="pl-0.5 mt-0.5">Worker-Owned Cooperative Design Studio, 2019 - 2023</h5>
                            <p>Delivered end-to-end UX and frontend solutions for civic and nonprofit clients, blending participatory research with accessible, mobile-first design.</p>
                            <p> Led co-design workshops, developed responsive web interfaces, and mentored clients in sustainable design practices.</p>
                    </div>
                </div>

                <div className="rounded-xl mt-6 mb-6 p-6 pb-3 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-6"> Education </h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-4">
                            <li>
                                <strong>UX Design Immersive</strong> - General Assembly, Seattle
                            </li>
                            <li>
                                <strong>B.Sci Community Health Education</strong> - Portland State University
                            </li>
                        </ul>
                    </div>
                
        </div>     
    </RevealOnScroll>
    </section>
}