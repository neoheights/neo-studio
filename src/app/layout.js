import localFont from "next/font/local";
import './globals.scss';
import ThemeProvider from "@/components/ThemeProvider";
import ContactPopup from "@/components/ContactPopup/ContactPopup";

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
      <head>
        {/* Meta Pixel base script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1731619867511605');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1731619867511605&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${bdoGrotesk.variable} ${sfProDisplay.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <ContactPopup />
      </body>
    </html>
  );
}
