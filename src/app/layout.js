import localFont from "next/font/local";
import './globals.scss';
import ThemeProvider from "@/components/ThemeProvider";

const bdoGrotesk = localFont({
  src: [
    { path: "../assets/fonts/bdo/BDOGrotesk-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../assets/fonts/bdo/BDOGrotesk-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-bdo",
  display: "swap",
});

const sfProDisplay = localFont({
  src: [
    { path: "../assets/fonts/SFPro/SF-Pro-Display-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../assets/fonts/SFPro/SF-Pro-Display-UltralightItalic.otf", weight: "200", style: "italic" },
    { path: "../assets/fonts/SFPro/SF-Pro-Display-LightItalic.otf", weight: "300", style: "italic" },

    { path: "../assets/fonts/SFPro/SF-Pro-Display-Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/SFPro/SF-Pro-Display-Medium.otf", weight: "500", style: "normal" },

    { path: "../assets/fonts/SFPro/SF-Pro-Display-SemiboldItalic.otf", weight: "600", style: "italic" },
    { path: "../assets/fonts/SFPro/SF-Pro-Display-Bold.otf", weight: "700", style: "normal" },

    { path: "../assets/fonts/SFPro/SF-Pro-Display-HeavyItalic.otf", weight: "800", style: "italic" },
    { path: "../assets/fonts/SFPro/SF-Pro-Display-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-sf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bdoGrotesk.variable} ${sfProDisplay.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
