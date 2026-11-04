export default function PageHead({ title, lead }) {
  return (
    <section className="phead">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
