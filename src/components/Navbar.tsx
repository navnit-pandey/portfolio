"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(sections[i]);
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
          background: scrolled ? "rgba(8, 9, 13, 0.85)" : "transparent",
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

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  active === item.href.replace("#", "")
                    ? "text-[var(--accent)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-4 text-xs font-mono"
            >
              <GithubIcon size={15} /> github
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
            }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
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
                className="pt-4 mt-2 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href="https://github.com/navnit-pandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[var(--accent)]"
                >
                  <GithubIcon size={16} /> GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
