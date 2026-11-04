import Link from "next/link";
import { links } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo">Marée</p>
          <p>Hôtel de plage, 24 suites.<br />12 chemin des Dunes, 17630 La Flotte</p>
        </div>
        <nav aria-label="Pied de page">
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <p>reservation@maree-hotel.fr<br />+33 5 00 00 00 00</p>
      </div>
      <p className="wrap copy">© 2026 Marée. Tous droits réservés.</p>
    </footer>
  );
}
