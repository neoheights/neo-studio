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
    { path: "../assets/fonts/SFPro/SFPRODISPLAYTHINITALIC.otf", weight: "100", style: "italic" },
    { path: "../assets/fonts/SFPro/SFPRODISPLAYULTRALIGHTITALIC.otf", weight: "200", style: "italic" },
    { path: "../assets/fonts/SFPro/SFPRODISPLAYLIGHTITALIC.otf", weight: "300", style: "italic" },

    { path: "../assets/fonts/SFPro/SFPRODISPLAYREGULAR.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/SFPro/SFPRODISPLAYMEDIUM.otf", weight: "500", style: "normal" },

    { path: "../assets/fonts/SFPro/SFPRODISPLAYSEMIBOLDITALIC.otf", weight: "600", style: "italic" },
    { path: "../assets/fonts/SFPro/SFPRODISPLAYBOLD.otf", weight: "700", style: "normal" },

    { path: "../assets/fonts/SFPro/SFPRODISPLAYHEAVYITALIC.otf", weight: "800", style: "italic" },
    { path: "../assets/fonts/SFPro/SFPRODISPLAYBLACKITALIC.otf", weight: "900", style: "italic" },
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
