"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Link, QrCode, Check, Download, X } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const SITE_URL = "https://www.adwaveagency.in";

export default function ShareButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Adwave Agency",
          text: "Explore Adwave Agency",
          url: SITE_URL,
        });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(SITE_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // fallback
      }
    }
    setDropdownOpen(false);
  };

  const handleDownloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "adwave-website-qr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-ocean"
        aria-label="Share website"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden z-50">
          <button
            onClick={handleShareLink}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-charcoal transition-colors hover:bg-tint"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Link className="h-4 w-4 text-ocean" />
            )}
            {copied ? "Link copied" : "Share Link"}
          </button>
          <button
            onClick={() => { setQrOpen(true); setDropdownOpen(false); }}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-charcoal transition-colors hover:bg-tint"
          >
            <QrCode className="h-4 w-4 text-ocean" />
            Share QR
          </button>
        </div>
      )}

      {qrOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xs rounded-2xl bg-offwhite p-6 text-center shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-bold text-charcoal">Scan QR</h3>
              <button onClick={() => setQrOpen(false)} aria-label="Close">
                <X className="h-5 w-5 text-midgrey hover:text-charcoal" />
              </button>
            </div>
            <div className="mx-auto flex items-center justify-center rounded-xl bg-white p-4">
              <QRCodeCanvas value={SITE_URL} size={180} fgColor="#0A2540" />
            </div>
            <p className="mt-3 text-xs text-midgrey">adwaveagency.in</p>
            <button
              onClick={handleDownloadQR}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download QR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
