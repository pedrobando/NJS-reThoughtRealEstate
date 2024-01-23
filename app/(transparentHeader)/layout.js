import Footer from "../_components/Footer";
import TransparentNavBar from "../_components/transparentNavBar";
import "../globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center font-body">
        <TransparentNavBar />
        <h1> Home Layout</h1>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
