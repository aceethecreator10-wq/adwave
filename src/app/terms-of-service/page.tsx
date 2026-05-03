import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Adwave Agency",
  description: "Terms of service for adwaveagency.in",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <a href="/" className="text-sm text-ocean hover:underline">&larr; Back to Home</a>
        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-midgrey">Last updated: May 1, 2026</p>

        <div className="prose prose-slate mt-12 max-w-none text-midgrey">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website <strong>adwaveagency.in</strong>
            (the &quot;Site&quot;), operated by Adwave Agency (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our Site,
            you agree to be bound by these Terms.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">1. Services</h2>
          <p>
            Adwave Agency provides digital marketing, content creation, social media management, videography,
            photography, and related creative services. Specific terms, scope, pricing, and deliverables for
            individual projects will be outlined in separate agreements or proposals.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">2. Use of the Website</h2>
          <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
          <ul className="list-disc pl-6">
            <li>Infringe upon the rights of others.</li>
            <li>Interfere with or disrupt the integrity or performance of the Site.</li>
            <li>Attempt to gain unauthorized access to the Site or its related systems.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">3. Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, images, and software, is the property of
            Adwave Agency or its licensors and is protected by Indian and international intellectual property laws.
          </p>
          <p>
            Deliverables provided to clients under a service agreement become the property of the client upon full
            payment, unless otherwise agreed in writing.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">4. Client Responsibilities</h2>
          <p>Clients engaging our services agree to:</p>
          <ul className="list-disc pl-6">
            <li>Provide accurate and complete information required for project execution.</li>
            <li>Meet agreed-upon payment terms as specified in their project agreement.</li>
            <li>Provide timely feedback and approvals to avoid project delays.</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">5. Payment and Refunds</h2>
          <p>
            Payment terms, pricing, and refund policies will be specified in individual service agreements.
            Generally, advance payments are non-refundable once work has commenced, unless otherwise stated.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">6. Limitation of Liability</h2>
          <p>
            Adwave Agency shall not be liable for any indirect, incidental, or consequential damages arising from
            the use of our services or the Site. Our total liability shall not exceed the amount paid by the client
            for the specific service giving rise to the claim.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">7. Disclaimer</h2>
          <p>
            The Site is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee
            that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">8. Confidentiality</h2>
          <p>
            We treat all client information and project details as confidential. We will not disclose proprietary
            client information to third parties without consent, except as required by law.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
            arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of
            the courts in Mumbai, Maharashtra.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">10. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Site at our sole discretion, without
            notice, for conduct that we believe violates these Terms or is harmful to other users or us.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be posted on this page with an updated date.
            Your continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-charcoal">12. Contact Us</h2>
          <p>
            For questions regarding these Terms, please contact us at:
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