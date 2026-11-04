import Link from "next/link";

const stays = [
  {
    href: "/chambres",
    name: "Suites",
    text: "Quatre types de suites, toutes tournées vers la mer.",
  },
  {
    href: "/experiences",
    name: "Spa & Table",
    text: "Soins marins, cuisine de pêche du jour, dîners sur le sable.",
  },
  {
    href: "/experiences",
    name: "Plage Privée",
    text: "Cinq cents mètres de sable, transats et moniteurs de voile.",
  },
];
const day = [
  { t: "6 h", n: "Aube", c: "var(--blue)", g: 2 },
  { t: "10 h", n: "Mer", c: "var(--sea)", g: 1.4 },
  { t: "14 h", n: "Sel", c: "var(--mist)", g: 1.4 },
  { t: "18 h", n: "Sable rose", c: "var(--sand)", g: 1.4 },
  { t: "22 h", n: "Nuit", c: "var(--deep)", g: 3 },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <p className="hero-sub">Hôtel De Plage, Côte Atlantique</p>
          <h1 className="hero-title">Marée</h1>
          <div className="hero-row">
            <p>
              Vingt-quatre suites au bord de l’eau. <br /> Un lieu calme, pensé
              pour ralentir.
            </p>
            <div className="actions">
              <Link href="/reservation" className="btn btn-light">
                Réserver un séjour
              </Link>
              <Link href="/chambres" className="btn btn-line">
                Voir les suites
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap split">
        <h2 className="big">Le jour se règle sur la marée, le reste suit.</h2>
        <p className="lead">
          Marée accueille au plus vingt-quatre suites, une plage privée et une
          équipe qui connaît vos habitudes dès la deuxième nuit. Pas de
          programme imposé : on vous propose, vous choisissez.
        </p>
      </section>

      <section className="wrap section-tight">
        <ul className="rows">
          {stays.map((s) => (
            <li key={s.name}>
              <Link href={s.href} className="row">
                <span className="row-name">{s.name}</span>
                <span className="row-text">{s.text}</span>
                <span className="row-go">Découvrir</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap">
        <h2 className="mid">Une journée à Marée</h2>
        <div className="day" role="list">
          {day.map((d) => (
            <div
              key={d.t}
              role="listitem"
              className="day-seg"
              style={{
                background: d.c,
                flexGrow: d.g,
                color: d.n === "Nuit" ? "#fff" : "var(--ink)",
              }}
            >
              <span>{d.t}</span>
              <strong>{d.n}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2 className="big">Réservez la vue avant la chambre.</h2>
          <Link href="/reservation" className="btn btn-ink">
            Vérifier les disponibilités
          </Link>
        </div>
      </section>
    </>
  );
}
