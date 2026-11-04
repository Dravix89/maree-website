"use client";
import { useState } from "react";
import { rooms } from "@/lib/data";

export default function BookingForm() {
  const [sent, setSent] = useState(null);
  function onSubmit(e) {
    e.preventDefault();
    setSent(Object.fromEntries(new FormData(e.currentTarget)));
  }
  if (sent) {
    return (
      <div className="done" role="status">
        <h2 className="mid">Demande envoyée</h2>
        <p className="lead">Merci {sent.name}. Nous vous écrivons à {sent.email} sous 24 heures pour confirmer la {sent.room}.</p>
        <button className="btn btn-ink" onClick={() => setSent(null)}>Modifier la demande</button>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Nom complet<input name="name" required autoComplete="name" /></label>
      <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
      <div className="two">
        <label>Arrivée<input name="from" type="date" required /></label>
        <label>Départ<input name="to" type="date" required /></label>
      </div>
      <div className="two">
        <label>Suite
          <select name="room" defaultValue={rooms[0].name}>
            {rooms.map((r) => <option key={r.name}>{r.name}</option>)}
          </select>
        </label>
        <label>Voyageurs<input name="guests" type="number" min="1" max="4" defaultValue="2" /></label>
      </div>
      <label>Message (facultatif)<textarea name="msg" rows="4" /></label>
      <button className="btn btn-ink" type="submit">Envoyer la demande</button>
    </form>
  );
}
