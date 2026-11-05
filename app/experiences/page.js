import PageHead from "@/components/PageHead";
import { experiences } from "@/lib/data";

export const metadata = { title: "Expériences" };

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
            <div className="exp-art">
              <img src={`/experiences/img${i + 1}.jpg`} alt={e.name} />
            </div>
            <div className="exp-body">
              <h2 className="exp-title">{e.name}</h2>
              <p className="lead">{e.text}</p>
              <p className="meta">{e.meta}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
