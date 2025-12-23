export default function BentoGrid() {
    return (
        <section id="philosophy" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Leadership & Vision</h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Technical excellence is just the foundation. My focus is on cultivating culture, systems, and strategy.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Large Card: Philosophy */}
                    <div className="md:col-span-2 row-span-2 p-8 rounded-[2rem] bg-white border border-white shadow-soft hover:shadow-lg transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-all group-hover:bg-primary/20" />

                        <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">Engineering Philosophy</h3>
                        <div className="space-y-4 text-slate-600 relative z-10 leading-relaxed">
                            <p>
                                <strong>People First:</strong> Great software is built by happy, empowered teams. I prioritize psychological safety and continuous learning.
                            </p>
                            <p>
                                <strong>Radical Simplicity:</strong> Complexity is the enemy of velocity. I advocate for boring technology choices that solve interesting business problems.
                            </p>
                            <p>
                                <strong>Data-Driven Decisions:</strong> Gut feeling is a starting point, but data should drive the destination. I implement rigorous observability and metrics.
                            </p>
                        </div>
                    </div>

                    {/* Tall Card: Tech Stack */}
                    <div className="md:col-span-1 row-span-2 p-8 rounded-[2rem] bg-slate-900 text-white shadow-soft hover:shadow-xl transition-all relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/20 to-transparent opacity-50" />

                        <h3 className="text-xl font-bold mb-6 relative z-10">Tech Radar</h3>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Adopt</div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10">Next.js</span>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10">TypeScript</span>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10">Go</span>
                                </div>
                            </div>

                            <div>
                                <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Assess</div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/5 text-slate-300">Rust</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/5 text-slate-300">Bun</span>
                                </div>
                            </div>

                            <div>
                                <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Hold</div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-sm border border-red-500/20 text-red-200">Legacy REST</span>
                                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-sm border border-red-500/20 text-red-200">Jenkins</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Mentorship */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-50 to-white border border-white shadow-soft hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Mentorship</h3>
                        <p className="text-slate-600 text-sm">
                            Mentored 15+ engineers to Senior/Staff roles. Built internal &quot;Tech Talk&quot; culture.
                        </p>
                    </div>

                    {/* Small Card: Strategy */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-teal-50 to-white border border-white shadow-soft hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Strategy</h3>
                        <p className="text-slate-600 text-sm">
                            Aligned technical roadmap with OKRs, reducing time-to-market by 40%.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
