import { Fraunces, Hanken_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--f-display",
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
});
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: { default: "Marée, Hôtel De Plage", template: "%s | Marée" },
  description:
    "Hôtel de plage de 24 suites face à l’Atlantique : suites, spa marin, table de pêche du jour.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
