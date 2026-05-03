"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwjvjr";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    company: "",
    owner: "",
    since: "",
    source: "",
    service: "",
    experience: "",
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
      } else {
        setError("Something went wrong. Please try again.");
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
    <section className="bg-tint py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Share Your Experience
          </h2>
          <p className="mt-4 text-midgrey">
            Help us grow by sharing your story with Adwave.
          </p>

          {submitted ? (
            <div className="mt-12 rounded-2xl bg-white p-12 text-center">
              <div className="text-5xl">💙</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">
                Thank You!
              </h3>
              <p className="mt-2 text-midgrey">Your feedback means the world to us.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-medium text-ocean hover:underline"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 rounded-2xl bg-white p-8 text-left">
              {error && (
                <div className="mb-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {error}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    name="owner"
                    required
                    value={formData.owner}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Since when are you working with Adwave? *
                  </label>
                  <input
                    type="text"
                    name="since"
                    required
                    value={formData.since}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                    placeholder="e.g. January 2024"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Direct or Referral? *
                  </label>
                  <select
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                  >
                    <option value="">Select</option>
                    <option value="Direct">Direct</option>
                    <option value="Referral">Referral</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-1 block text-sm font-medium text-charcoal">
                  What service did you take from us? *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                >
                  <option value="">Select a service</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="SMM">SMM</option>
                  <option value="PR">PR</option>
                  <option value="Content Production">Content Production</option>
                  <option value="UGC">UGC</option>
                  <option value="Videography">Videography</option>
                  <option value="Photography">Photography</option>
                  <option value="Editing">Editing</option>
                  <option value="Web Developing">Web Developing</option>
                  <option value="Brand Designing">Brand Designing</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="mb-1 block text-sm font-medium text-charcoal">
                  What was your experience? *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                >
                  <option value="">Select</option>
                  <option value="Amazing">Amazing</option>
                  <option value="Great">Great</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Below Average">Below Average</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="mb-1 block text-sm font-medium text-charcoal">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-lightgrey bg-white px-4 py-3 text-charcoal outline-none focus:border-ocean"
                  placeholder="Tell us more about your experience..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full rounded-full bg-ocean py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Feedback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}