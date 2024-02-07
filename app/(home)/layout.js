import "../globals.css";
import NavBarSolid from "../_components/NavBarSolid";
import Footer from "../_components/Footer";
import TransparentNavBar from "../_components/transparentNavBar";

export const metadata = {
  metadataBase: new URL("http://localhost:300"),
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
      <body className="min-h-screen flex flex-col justify-between">
        <TransparentNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}