import { site } from "@/lib/site";

export default function Footer() {
  return (
    <div className="wrap">
      <footer className="site-footer">
        <span>© {site.year} {site.name}</span>
        <span>Chicago &amp; Bengaluru</span>
      </footer>
    </div>
  );
}
