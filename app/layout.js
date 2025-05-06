import "./globals.css";
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/templates/Footer/Footer";
import VpnAccessPopup from "@/components/modules/VpnAccessPopup/VpnAccessPopup";

export const metadata = {
  title: "Next movies",
  description: "next.js movies app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
