import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <a href="#hero" className="font-heading text-2xl font-bold text-ocean">
              Adwave Agency
            </a>
            <p className="mt-4 text-sm text-lightgrey">
              Full-stack content agency for Indian brands that want to make an impact.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com/adwaveagency._" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky" aria-label="Instagram">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.979-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@AdWave-l7g" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky" aria-label="YouTube">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aditya-chonkar-adwave" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky" aria-label="LinkedIn">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-lightgrey hover:text-sky">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-sm text-lightgrey hover:text-sky">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-lightgrey hover:text-sky">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-lightgrey hover:text-sky">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-lightgrey hover:text-sky">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-lightgrey">
              <li>
                <a href="mailto:adwave07@gmail.com" className="hover:text-sky transition-colors">adwave07@gmail.com</a>
              </li>
              <li>
                <a href="tel:9322094912" className="hover:text-sky transition-colors">93220 94912</a>
              </li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="text-sm text-lightgrey">
            &copy; {new Date().getFullYear()} adwaveagency.in. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy" className="text-lightgrey hover:text-sky">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-lightgrey hover:text-sky">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}