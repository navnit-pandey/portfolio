"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["contact", "about", "skills", "projects", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 140 >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8, 9, 13, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
      >
        <div className="container-custom flex items-center justify-between h-20">
          {/* Wordmark */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="Go to top"
          >
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
              Navnit<span className="text-[var(--accent)]">.</span>
            </span>
            <span className="tag-accent text-xs hidden sm:inline-flex">
              AI/ML Engineer
            </span>
          </button>

          {/* Desktop Nav Links (Streamlined to 4 items) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link text-sm font-medium transition-colors cursor-pointer ${
                  active === item.href.replace("#", "")
                    ? "active text-[var(--accent)] font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Icons (Resume, GitHub, LinkedIn) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Navnit_Pandey_Resume.pdf"
              download="Navnit_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-3 text-xs font-mono"
              aria-label="Download Resume / CV"
            >
              <FileText size={14} className="text-[var(--accent)]" />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
              }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-[#38bdf8] transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
              }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white transition-colors"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
            }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-0 right-0 p-6"
            style={{
              background: "#0d0f17",
              borderBottom: "1px solid var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-custom flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    active === item.href.replace("#", "")
                      ? "text-[var(--accent)] bg-[rgba(163,230,53,0.08)]"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div
                className="pt-4 mt-2 border-t flex flex-col gap-2"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href="/Navnit_Pandey_Resume.pdf"
                  download="Navnit_Pandey_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--accent)]"
                >
                  <FileText size={16} /> Download Resume / CV ↗
                </a>
                <a
                  href="https://github.com/navnit-pandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-300"
                >
                  <GithubIcon size={16} /> GitHub Profile ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/navnit-pandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#38bdf8]"
                >
                  <LinkedinIcon size={16} /> LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
