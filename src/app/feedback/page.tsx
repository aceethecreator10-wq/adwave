import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Share Your Experience — Adwave Agency",
  description: "Help us grow by sharing your feedback.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link href="/" className="text-sm text-ocean hover:underline">&larr; Back to Home</Link>
        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Give Us Your Feedback
        </h1>
        <p className="mt-4 text-lg text-midgrey">
          We value your experience. Share your thoughts and help us grow.
        </p>
        <div className="mt-8">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}