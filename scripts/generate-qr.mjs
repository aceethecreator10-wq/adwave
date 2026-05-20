import QRCode from "qrcode";
import { writeFileSync } from "fs";

const url = "https://www.adwaveagency.in";

const buffer = await QRCode.toBuffer(url, {
  type: "png",
  width: 512,
  margin: 2,
  color: {
    dark: "#0A2540",
    light: "#FFFFFF",
  },
});

writeFileSync("public/adwave-website-qr.png", buffer);
console.log("Generated public/adwave-website-qr.png");
