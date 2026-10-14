"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
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

        {/* Unified 3-Card Grid: Gmail, LinkedIn, GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {/* 1. Gmail Card - Styled identically to LinkedIn and GitHub */}
          <a
            href={gmailWebComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            id="contact-card-gmail"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.25)",
                }}
              >
                <Mail size={22} className="text-rose-400 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Direct Email</p>
                <p className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                  Gmail
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5 truncate max-w-[170px] sm:max-w-[200px]">
                  {contactDetails.email}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-slate-500 group-hover:text-rose-400 transition-colors flex-shrink-0"
            />
          </a>

          {/* 2. LinkedIn Card */}
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            id="contact-card-linkedin"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
              >
                <LinkedinIcon size={22} className="text-[#38bdf8] group-hover:scale-110 transition-transform" />
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

          {/* 3. GitHub Card */}
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            id="contact-card-github"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(163, 230, 53, 0.08)",
                  border: "1px solid rgba(163, 230, 53, 0.2)",
                }}
              >
                <GithubIcon size={22} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
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

        {/* Quick Utility Actions (1-Click Copy & Standard Mailto) */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Inquiries:</span>
            <span className="text-white font-semibold select-all">{contactDetails.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="btn-secondary text-xs py-2 px-3.5 cursor-pointer flex items-center gap-2"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contactDetails.email}`}
              className="btn-secondary text-xs py-2 px-3.5 text-slate-400 hover:text-white flex items-center gap-1.5"
              aria-label="Open default mail client"
            >
              <Mail size={14} /> Open in Mail App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
