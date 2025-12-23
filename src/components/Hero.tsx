export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Aurora Background Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="space-y-8 text-center sm:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-white/60 backdrop-blur-md shadow-sm">
                        <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm">
                            Director of Software Development
                        </h2>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Visionary</span> <br />
                        Engineering Teams.
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light">
                        Bridging the gap between <strong>business strategy</strong> and <strong>technical execution</strong>.
                        Building scalable systems and empowering world-class engineers.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="#experience"
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-full transition-colors border border-slate-200 shadow-sm hover:shadow-md"
                        >
                            View Work
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
