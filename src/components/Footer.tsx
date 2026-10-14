import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container-custom py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">
              Navnit Pandey
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-300">
              B.Tech in AI &amp; ML · Lovely Professional University
            </span>
          </div>

          {/* Center */}
          <p className="text-xs font-mono text-slate-400">
            © 2026 Navnit Pandey. Open for Summer 2027 Internships.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={19} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
