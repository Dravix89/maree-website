import Link from "next/link";
import PageHead from "@/components/PageHead";
import { rooms } from "@/lib/data";

export const metadata = { title: "Suites" };

export default function Chambres() {
  return (
    <>
      <PageHead
        title="Suites"
        lead="Quatre suites, une même exigence : la lumière, le calme et la mer dans chaque pièce."
      />
      <section aria-label="Liste des suites">
        {rooms.map((r, i) => (
          <article
            key={r.name}
            className={`band band-${r.tone} ${i % 2 ? "band-flip" : ""}`}
            style={{
              paddingBlock: `${i === 0 ? 20 : 72 + (i % 2) * 16}px ${90 + (i % 2) * 16}px`,
            }}
          >
            <div
              className="band-photo"
              aria-hidden="true"
              style={{ "--photo": `url(${r.photo})` }}
            >
              <span />
            </div>
            <div className="wrap band-grid">
              <div>
                <h2 className="mid">{r.name}</h2>
                <p className="lead">{r.text}</p>
              </div>
              <div className="band-side">
                <ul className="specs">
                  <li>{r.size}</li>
                  {r.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="price">
                  À partir de <strong>{r.price}</strong> par nuit
                </p>
                <Link
                  href="/reservation"
                  className={`btn ${r.tone === "deep" ? "btn-light" : "btn-ink"}`}
                >
                  Réserver cette suite
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
