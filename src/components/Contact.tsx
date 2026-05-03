"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrqavy";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Let&apos;s Make Waves
            </h2>
            <p className="mt-4 text-lg text-lightgrey">
              Ready to take your brand to the next level?
              <br />
              Tell us what you&apos;re building — we&apos;ll show you how to scale it.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <div className="text-sm font-medium text-sky">Email</div>
                <a href="mailto:adwave07@gmail.com" className="text-white hover:text-sky transition-colors">
                  adwave07@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-sky">Phone</div>
                <a href="tel:9322094912" className="text-white hover:text-sky transition-colors">
                  93220 94912
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-sky">Location</div>
                <div className="text-white">Mumbai, India</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-charcoal p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="text-5xl">🎉</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-lightgrey">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-sky hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-lightgrey">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-sky"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-lightgrey">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-sky"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-lightgrey">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-sky"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-lightgrey">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-sky"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-lightgrey">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-sky [&>option]:text-charcoal"
                  >
                    <option value="">Select a service</option>
                    <option value="performance-marketing">Performance Marketing</option>
                    <option value="smm">SMM</option>
                    <option value="pr">PR</option>
                    <option value="content-production">Content Production</option>
                    <option value="ugc">UGC</option>
                    <option value="videography">Videography</option>
                    <option value="photography">Photography</option>
                    <option value="editing">Editing</option>
                  <option value="web-developing">Web Developing</option>
                  <option value="brand-designing">Brand Designing</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-lightgrey">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-sky"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-sky py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}