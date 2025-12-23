import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/60 rounded-full shadow-soft">
                <div className="px-8 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-wide text-slate-900 cursor-pointer hover:text-primary transition-colors">
                        <Link href="/">Jai Rajagopalan</Link>
                    </div>

                    <nav className="flex gap-6 sm:gap-8 text-sm font-medium text-slate-600">
                        <Link href="#experience" className="hover:text-primary transition-colors relative group">
                            Experience
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 transition-all group-hover:w-full rounded-full" />
                        </Link>
                        <Link href="#skills" className="hover:text-primary transition-colors relative group">
                            Skills
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 transition-all group-hover:w-full rounded-full" />
                        </Link>
                        <Link href="#philosophy" className="hover:text-primary transition-colors relative group">
                            Philosophy
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 transition-all group-hover:w-full rounded-full" />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

