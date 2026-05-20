import QRCode from "qrcode";
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const url = "https://www.adwaveagency.in";
const QR_SIZE = 512;
const LOGO_PATH = "public/LOGO/logo.jpg";
const OUTPUT_PATH = "public/adwave-website-qr.png";
const LOGO_SIZE = Math.round(QR_SIZE * 0.20);
const PADDING = 8;
const OVERLAY_SIZE = LOGO_SIZE + PADDING * 2;

const qrBuffer = await QRCode.toBuffer(url, {
  type: "png",
  width: QR_SIZE,
  margin: 2,
  errorCorrectionLevel: "H",
  color: {
    dark: "#0A2540",
    light: "#FAFAF8",
  },
});

const whiteBg = Buffer.from(
  `<svg width="${OVERLAY_SIZE}" height="${OVERLAY_SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="16" fill="white"/>
  </svg>`
);

const logoBuffer = readFileSync(LOGO_PATH);
const resizedLogo = await sharp(logoBuffer)
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: "cover" })
  .png()
  .toBuffer();

const qrWithLogo = await sharp(qrBuffer)
  .composite([
    {
      input: whiteBg,
      top: Math.round((QR_SIZE - OVERLAY_SIZE) / 2),
      left: Math.round((QR_SIZE - OVERLAY_SIZE) / 2),
    },
    {
      input: resizedLogo,
      top: Math.round((QR_SIZE - LOGO_SIZE) / 2),
      left: Math.round((QR_SIZE - LOGO_SIZE) / 2),
    },
  ])
  .png()
  .toBuffer();

writeFileSync(OUTPUT_PATH, qrWithLogo);
console.log("Generated", OUTPUT_PATH);
