import "../globals.css";
import NavBarSolid from "../_components/NavBarSolid";
import Footer from "../_components/Footer";
import MapBoxImport from "../_utils/mapBoxImport";
import FubPixel from "../_libs/FubPixel";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: {
    default: "Milwaukee Bilingual REALTORS® | reThought Real Estate",
    template: `%s | reThought Real Estate`,
  },
  description: {
    default:
      "Kissimmee's and Milwaukee's Bilingual boutique real estate firm. Local agents providing a personalized, tech-driven, and client-centric approach to buying and selling real estate.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MapBoxImport />
      <body className="min-h-screen flex flex-col justify-between">
        <NavBarSolid />
        <div className="bg-white flex-grow min-h-64">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
        <FubPixel />
      </body>
    </html>
  );
}
