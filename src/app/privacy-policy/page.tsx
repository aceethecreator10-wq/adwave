import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Adwave Agency",
  description: "Privacy policy for adwaveagency.in",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <a href="/" className="text-sm text-ocean hover:underline">&larr; Back to Home</a>
        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-midgrey">Last updated: May 1, 2026</p>

        <div className="prose prose-slate mt-12 max-w-none text-midgrey">
          <p>
            Adwave Agency (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website <strong>adwaveagency.in</strong>.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">1. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us, including:</p>
          <ul className="list-disc pl-6">
            <li><strong>Contact Form Submissions:</strong> Name, email address, phone number, company name, service interest, and message content.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and referral URLs collected automatically through analytics tools.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">2. How We Use Your Information</h2>
          <p>We use the information collected for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To process and manage your project or service requests.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To send you marketing communications only with your consent.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">3. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Service Providers:</strong> Trusted third-party services (e.g., Formspree for form processing, Vercel for hosting) that assist us in operating our website.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">4. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal
            information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (e.g., Instagram, YouTube, LinkedIn). We are not responsible
            for the privacy practices of those sites.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">6. Your Rights</h2>
          <p>
            Under applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDPA),
            you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>File a grievance with our designated contact below.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">7. Cookies</h2>
          <p>
            We may use cookies and similar tracking technologies to analyze website usage and improve user experience.
            You can control cookie preferences through your browser settings.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">8. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
            information from children.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">10. Contact Us</h2>
          <p>
            For any questions regarding this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:adwave07@gmail.com" className="text-ocean">adwave07@gmail.com</a>
            <br />
            <strong>Phone:</strong> <a href="tel:9322094912" className="text-ocean">93220 94912</a>
            <br />
            <strong>Location:</strong> Mumbai, India
          </p>
        </div>
      </div>
    </div>
  );
}