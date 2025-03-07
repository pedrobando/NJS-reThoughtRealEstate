import "@/app/globals.css";
import Footer from "@/components/Footer";
import TransparentNavBar from "@/components/transparentNavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import FubPixel from "@/libs/FubPixel";
import Mapbox from "@/libs/Mapbox";

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default:
      "Milwaukee & Central Florida Bilingual REALTORS® | reThought Real Estate",
    template: `%s | reThought Real Estate`,
  },
  description:
    "Bilingual boutique real estate firm focused in serving Southeastern WI and Central Florida. Local agents providing a personalized, tech-driven, and client-centric approach to buying and selling real estate.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <Mapbox />

      <body className="min-h-screen flex flex-col justify-between">
        <TransparentNavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
        <FubPixel />
      </body>
    </html>
  );
}
