import PageHead from "@/components/PageHead";

export const metadata = { title: "Notre histoire" };
const facts = [
  ["2016", "Ouverture De L’Hôtel"],
  ["24", "Suites, Pas Une De Plus"],
  ["500 m", "De Plage Privée"],
];
const values = [
  [
    "Peu de monde",
    "Nous limitons volontairement les réservations pour garder la plage calme.",
  ],
  [
    "Matières locales",
    "Lin, pin, pierre de la côte : rien qui ne vienne de plus de 300 km.",
  ],
  [
    "Service discret",
    "On répond avant que vous ne demandiez, et on s’efface le reste du temps.",
  ],
];

export default function Histoire() {
  return (
    <>
      <PageHead
        title="Notre histoire"
        lead="Une ancienne maison de pêcheurs devenue hôtel, sans jamais cesser de regarder la mer."
      />
      <section className="section wrap split">
        <h2 className="big">Né d’une maison, pas d’un projet immobilier.</h2>
        <div className="prose">
          <p>
            En 2016, la famille Delmas rachète une maison de pêcheurs abandonnée
            au bout du chemin des Dunes. L’idée tient en une phrase : offrir aux
            voyageurs ce qu’elle aimait elle-même, une plage tranquille et une
            table honnête.
          </p>
          <p>
            Dix ans plus tard, la maison compte vingt-quatre suites. Les
            architectes ont gardé les proportions d’origine, les murs chaulés et
            les grandes baies orientées à l’ouest.
          </p>
        </div>
      </section>
      <section className="wrap">
        <dl className="facts">
          {facts.map(([n, l]) => (
            <div key={n}>
              <dt>{n}</dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="section wrap">
        <h2 className="mid">Ce qui guide l’hôtel</h2>
        <ul className="rows">
          {values.map(([n, t]) => (
            <li key={n} className="row row-static">
              <span className="row-name">{n}</span>
              <span className="row-text">{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
