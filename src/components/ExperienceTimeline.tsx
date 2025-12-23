const roles = [
    {
        id: 1,
        title: "Director of Software Development",
        company: "Tech Giant Corp",
        date: "2023 - Present",
        description: "Leading a department of 50+ engineers. Responsible for the technical roadmap and delivery of key enterprise products. Improved deployment frequency by 40%."
    },
    {
        id: 2,
        title: "Principal Software Architect",
        company: "Innovative StartUp Inc",
        date: "2020 - 2023",
        description: "Designed core microservices architecture handling 1M+ daily requires. Mentored senior engineers and established best practices for cloud-native development."
    },
    {
        id: 3,
        title: "Senior Software Engineer",
        company: "Legacy Systems Ltd",
        date: "2017 - 2020",
        description: "Lead developer for the migration of monolithic legacy systems to modern React/Node.js stack. Reduced technical debt and improved system stability."
    }
];

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-32 relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Professional Journey</h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon / Dot on Timeline */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-[2rem] bg-white border border-white shadow-soft transition-all hover:shadow-lg hover:-translate-y-1">
                                <div className="flex flex-col mb-4">
                                    <span className="text-sm font-bold tracking-wider text-primary uppercase mb-1">{role.date}</span>
                                    <h3 className="text-2xl font-bold text-slate-800">{role.title}</h3>
                                    <div className="text-lg text-slate-500 font-medium">{role.company}</div>
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

