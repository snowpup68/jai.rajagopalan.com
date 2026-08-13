import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="wordmark" href="/">{site.name}</Link>
        <nav className="site-nav" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#interests">Interests</a>
          <a href="#education" data-optional>Education</a>
          <a href="#contact" data-optional>Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
