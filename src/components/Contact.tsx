"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { contactDetails } from "@/lib/data";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : null;

    if (!endpoint) {
      setTimeout(() => {
        window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `Hi Navnit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        setFormState("success");
      }, 500);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="section relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label">Direct Communication</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Let&rsquo;s Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Open to AI/ML and software engineering internships, technical collaborations, and discussion on machine learning systems.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Direct Cards with Copy Action */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <div className="card p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    <Mail size={20} className="text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Direct Email</p>
                    <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                      {contactDetails.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="btn-primary text-xs py-2 px-3.5 flex-1 text-center justify-center"
                >
                  <Mail size={14} /> Send Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary text-xs py-2 px-3.5 cursor-pointer flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <LinkedinIcon size={20} className="text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">LinkedIn Profile</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    linkedin.com/in/navnit-pandey
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-500 group-hover:text-[#38bdf8] transition-colors"
              />
            </a>

            {/* GitHub Card */}
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(163, 230, 53, 0.08)",
                    border: "1px solid rgba(163, 230, 53, 0.2)",
                  }}
                >
                  <GithubIcon size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">GitHub Profile</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    github.com/navnit-pandey
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-500 group-hover:text-[var(--accent)] transition-colors"
              />
            </a>

            {/* Location Card */}
            <div className="card p-5 flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(251, 191, 36, 0.08)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                }}
              >
                <MapPin size={20} className="text-[#fbbf24]" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Location</p>
                <p className="text-sm sm:text-base font-bold text-white">
                  {contactDetails.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form with Explicit <label> Elements */}
          <div className="lg:col-span-7">
            <div className="card p-7 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="input-field"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email Address <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="input-field"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="AI/ML Internship / Project Collaboration"
                    className="input-field"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, problem, or role..."
                    className="input-field resize-none leading-relaxed"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Visible Success State */}
                {formState === "success" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl text-xs sm:text-sm text-slate-200"
                    style={{
                      background: "rgba(163, 230, 53, 0.1)",
                      border: "1px solid rgba(163, 230, 53, 0.3)",
                    }}
                  >
                    <CheckCircle2 size={18} className="text-[var(--accent)] flex-shrink-0" />
                    <span>Your message was prepared / sent. I will get back to you promptly!</span>
                  </div>
                )}

                {/* Visible Error State */}
                {formState === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl text-xs sm:text-sm text-slate-200"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                    <span>
                      Could not send automatically. Please reach out directly at{" "}
                      <a href={`mailto:${contactDetails.email}`} className="text-white underline">
                        {contactDetails.email}
                      </a>
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn-primary w-full text-sm font-semibold justify-center py-3"
                >
                  {formState === "sending" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
