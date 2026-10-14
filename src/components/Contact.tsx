"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { contactDetails } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactDetails.email
  )}&su=${encodeURIComponent("AI/ML Internship Discussion — Navnit Pandey")}`;

  return (
    <section
      id="contact"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="section-label">Direct Communication</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Let&rsquo;s Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Open to AI/ML and software engineering internships, technical collaborations, and discussions on machine learning systems.
          </p>
        </div>

        {/* Focused Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Email Hub (7 cols) */}
          <div
            className="lg:col-span-7 card p-8 sm:p-10 flex flex-col justify-between gap-6"
            style={{ border: "1px solid rgba(163, 230, 53, 0.25)" }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(163, 230, 53, 0.1)",
                    border: "1px solid rgba(163, 230, 53, 0.25)",
                  }}
                >
                  <Mail size={22} className="text-[var(--accent)]" />
                </div>
                <div>
                  <span className="tag-accent text-xs mb-1">Primary Contact</span>
                  <p className="text-xs font-mono uppercase text-slate-400">Direct Email</p>
                </div>
              </div>

              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight select-all">
                  {contactDetails.email}
                </p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Fastest way to reach me directly for recruiter scans, technical interviews, or project discussions.
                </p>
              </div>
            </div>

            {/* Direct 3-way Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {/* Option 1: Web Gmail (Guaranteed to work in-browser on Windows/Mac/Linux) */}
              <a
                href={gmailWebComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-4 flex-1 sm:flex-initial text-center justify-center"
              >
                <ExternalLink size={15} /> Open in Gmail (Web)
              </a>

              {/* Option 2: 1-Click Copy with feedback */}
              <button
                onClick={handleCopyEmail}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4 cursor-pointer flex items-center justify-center gap-2 flex-1 sm:flex-initial"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Option 3: Default OS Mail Client */}
              <a
                href={`mailto:${contactDetails.email}`}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4 flex-1 sm:flex-initial text-center justify-center"
                aria-label={`Mailto ${contactDetails.email}`}
              >
                <Mail size={15} /> Default Mail Client
              </a>
            </div>
          </div>

          {/* Social & Verification Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* LinkedIn Card */}
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <LinkedinIcon size={22} className="text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Professional Profile</p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    linkedin.com/in/navnit-pandey
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-slate-500 group-hover:text-[#38bdf8] transition-colors flex-shrink-0"
              />
            </a>

            {/* GitHub Card */}
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(163, 230, 53, 0.08)",
                    border: "1px solid rgba(163, 230, 53, 0.2)",
                  }}
                >
                  <GithubIcon size={22} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Code &amp; Repositories</p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    github.com/navnit-pandey
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-slate-500 group-hover:text-[var(--accent)] transition-colors flex-shrink-0"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
