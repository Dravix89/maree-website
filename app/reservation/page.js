import PageHead from "@/components/PageHead";
import BookingForm from "@/components/BookingForm";

export const metadata = { title: "Réservation" };

export default function Reservation() {
  return (
    <>
      <PageHead title="Réservation" lead="Indiquez vos dates, nous confirmons sous 24 heures." />
      <section className="section wrap book">
        <BookingForm />
        <aside className="aside">
          <h2 className="small">Bon à savoir</h2>
          <ul>
            <li>Arrivée à partir de 15 h, départ avant 12 h.</li>
            <li>Annulation gratuite jusqu’à 7 jours avant l’arrivée.</li>
            <li>Séjour minimum de deux nuits en juillet et août.</li>
            <li>Petit déjeuner inclus.</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
