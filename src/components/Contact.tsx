"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
        window.location.href = `mailto:navnitpandey.tech@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `Hi Navnit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        setFormState("success");
      }, 600);
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
        {/* Header with generous spacing */}
        <div className="max-w-3xl mb-20">
          <p className="section-label">Direct Communication</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Let&rsquo;s connect
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
            Whether you&rsquo;d like to talk about machine learning projects, engineering
            internships, or just want to exchange ideas — my inbox is always open.
          </p>
        </div>

        {/* 2-Column Layout with generous 16-col gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Left Column (5 cols): Spacious Info Blocks */}
          <div className="lg:col-span-5 space-y-6">
            {/* GitHub Card */}
            <a
              href="https://github.com/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(163, 230, 53, 0.08)",
                    border: "1px solid rgba(163, 230, 53, 0.2)",
                  }}
                >
                  <GithubIcon size={22} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-0.5">
                    GitHub Profile
                  </p>
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

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/navnit-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 sm:p-7 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <LinkedinIcon size={22} className="text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-0.5">
                    LinkedIn Profile
                  </p>
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

            {/* Email Card */}
            <a
              href="mailto:navnitpandey.tech@gmail.com"
              className="card p-7 sm:p-8 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <Mail size={24} className="text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1">
                    Direct Email
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    navnitpandey.tech@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-slate-500 group-hover:text-[#38bdf8] transition-colors"
              />
            </a>

            {/* Location Card */}
            <div className="card p-7 sm:p-8 flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(251, 191, 36, 0.08)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                }}
              >
                <MapPin size={24} className="text-[#fbbf24]" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1">
                  Location &amp; University
                </p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Phagwara, Punjab, India
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  School of Computer Science &amp; Engineering, LPU
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Spacious, Uncrowded Form Card */}
          <div className="lg:col-span-7">
            <div className="card p-8 sm:p-12 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
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
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
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
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / AI Collaboration"
                    className="input-field"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about what you have in mind..."
                    className="input-field resize-none leading-relaxed"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Status Banners */}
                {formState === "success" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl text-sm"
                    style={{
                      background: "rgba(163, 230, 53, 0.08)",
                      border: "1px solid rgba(163, 230, 53, 0.25)",
                      color: "var(--accent)",
                    }}
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0" />
                    <span>
                      Thank you! Your message is on its way. I&rsquo;ll respond as soon as possible.
                    </span>
                  </div>
                )}

                {formState === "error" && (
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl text-sm"
                    style={{
                      background: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      color: "#f87171",
                    }}
                  >
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>
                      Unable to send automatically. Please email me directly at{" "}
                      <a
                        href="mailto:navnitpandey.tech@gmail.com"
                        className="underline font-semibold"
                      >
                        navnitpandey.tech@gmail.com
                      </a>
                    </span>
                  </div>
                )}

                {/* Refined CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="btn-primary"
                  >
                    {formState === "sending" ? (
                      <>Sending…</>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
