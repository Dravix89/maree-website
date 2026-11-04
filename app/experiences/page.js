import PageHead from "@/components/PageHead";
import { experiences } from "@/lib/data";

export const metadata = { title: "Expériences" };
const art = [
  "linear-gradient(160deg, var(--mist), var(--sand))",
  "linear-gradient(160deg, var(--blue), var(--mistt)) ",
  "linear-gradient(160deg, var(--mist), var(--sand)) ",
  "linear-gradient(160deg,  var(--blue), var(--mistt))",
];

export default function Experiences() {
  return (
    <>
      <PageHead
        title="Expériences"
        lead="Quatre façons d’occuper la journée, sans jamais vous la remplir."
      />
      <section className="wrap section-tight">
        {experiences.map((e, i) => (
          <article key={e.name} className={`exp ${i % 2 ? "exp-rev" : ""}`}>
            <div className="exp-art" style={{ background: art[i] }}>
              <h2 className="exp-art-title">{e.name}</h2>
            </div>
            <div className="exp-body">
              <p className="lead">{e.text}</p>
              <p className="meta">{e.meta}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
