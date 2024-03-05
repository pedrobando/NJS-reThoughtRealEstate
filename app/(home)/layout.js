import "../globals.css";
import Footer from "../_components/Footer";
import TransparentNavBar from "../_components/transparentNavBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import FubPixel from "../_libs/FubPixel"


export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: "Milwaukee Bilingual REALTORS® | reThought Real Estate",
    template:`%s | reThought Real Estate`
  },
  description: "Milwaukee's Bilingual boutique real estate firm. Local agents providing a personalized, tech-driven, and client-centric approach to buying and selling real estate.",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css"
        rel="stylesheet"
        precedence="default"
      />
      <script dangerouslySetInnerHTML={{ 
          __html: `
            (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
            {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
            (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
            e.parentNode.insertBefore(t,e);})
            (window,"https://widgetbe.com/agent",document,"widgetTracker");
            window.widgetTracker("create", "WT-CISCFZKA");
            window.widgetTracker("send", "pageview");
          `
        }} />
      <body className="min-h-screen flex flex-col justify-between">
        <TransparentNavBar />
        {children}
        <Footer />
        <SpeedInsights/>
        <Analytics/>
        <FubPixel/>
      </body>
    </html>
  );
}
