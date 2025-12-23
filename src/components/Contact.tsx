export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 text-white rounded-t-[3rem] mt-12">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    Let&apos;s Build Something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Visionary</span>.
                </h2>

                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    I&apos;m always open to discussing engineering leadership, distributed systems, or the next big thing in tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
                    <a
                        href="mailto:hello@example.com"
                        className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Say Hello
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                        Connect on LinkedIn
                    </a>
                </div>

                <footer className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jai. Built with Next.js & Tailwind.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </section>
    );
}
