import { GithubIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container-custom py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">
              Navnit Pandey
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-400">
              AI/ML Engineering Student &amp; Developer
            </span>
          </div>

          {/* Center */}
          <p className="text-xs font-mono text-slate-500">
            © 2025 Navnit Pandey. Designed &amp; built for genuine engineering impact.
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
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
