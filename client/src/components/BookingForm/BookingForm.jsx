import { useState } from "react";
import styles from "./BookingForm.module.css";
import { FaCalendarAlt, FaUsers, FaWhatsapp } from "react-icons/fa";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: "2"
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar uma pré-reserva na Yara Floating Villa em Guriú.\n\n` +
      `Nome: ${form.name}\n` +
      `Check-in: ${form.checkIn}\n` +
      `Check-out: ${form.checkOut}\n` +
      `Hóspedes: ${form.guests}\n\n` +
      `Poderia verificar a disponibilidade?`;
    
    const url = `https://wa.me/558888057600?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={styles.wrapper} id="booking">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h5 className={styles.tagline}>Contato & Reservas</h5>
            <h2 className={styles.title}>Inicie Sua Jornada Flutuante</h2>
            <p className={styles.desc}>
              Não temos reservas automáticas pois cada estadia é única. 
              Preencha os dados abaixo e fale diretamente com o proprietário no WhatsApp para confirmar sua reserva.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Localização:</strong>
                <span>Praia de Guriú, Camocim - CE</span>
              </div>
              <div className={styles.contactItem}>
                <strong>Acesso:</strong>
                <span>Atravessamos o rio para buscar você com nosso próprio barco.</span>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <div className={styles.card}>
              <form onSubmit={handleWhatsApp} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>Seu Nome</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Como podemos te chamar?" 
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label><FaCalendarAlt /> Check-in</label>
                    <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label><FaCalendarAlt /> Check-out</label>
                    <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} required />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label><FaUsers /> Hóspedes</label>
                  <select name="guests" value={form.guests} onChange={handleChange}>
                    <option value="1">1 Pessoa</option>
                    <option value="2">2 Pessoas</option>
                    <option value="3">3 Pessoas</option>
                    <option value="4">4 Pessoas</option>
                    <option value="5">5 Pessoas</option>
                    <option value="6">6 Pessoas</option>
                  </select>
                </div>

                <button type="submit" className={styles.waButtonFull}>
                  <FaWhatsapp /> Solicitar Disponibilidade no WhatsApp
                </button>
                
                <p className={styles.smallNote}>
                  A reserva será concluída diretamente com o proprietário.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;