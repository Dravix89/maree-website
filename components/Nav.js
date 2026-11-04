"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className={`nav ${open ? "nav-open" : ""}`}>
      <Link href="/" className="logo" aria-label="Marée, accueil">
        <img src="/logo.png" alt="Marée" />
      </Link>
      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav aria-label="Navigation principale">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={path === l.href ? "page" : undefined}
            className={l.href === "/reservation" ? "nav-cta" : ""}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
