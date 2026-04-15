import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./BookingForm.module.css";
import { FaCalendarAlt, FaUsers, FaWhatsapp } from "react-icons/fa";

function BookingForm() {
  const { t } = useTranslation();
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
    const text = t("booking_wa_msg", {
      name: form.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests
    });
    
    const url = `https://wa.me/558888057600?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={styles.wrapper} id="booking">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h5 className={styles.tagline}>{t("booking_tagline")}</h5>
            <h2 className={styles.title}>{t("booking_title")}</h2>
            <p className={styles.desc}>{t("booking_desc")}</p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>{t("booking_location_label")}</strong>
                <span>{t("booking_location")}</span>
              </div>
              <div className={styles.contactItem}>
                <strong>{t("booking_access_label")}</strong>
                <span>{t("booking_access")}</span>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <div className={styles.card}>
              <form onSubmit={handleWhatsApp} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label>{t("booking_name_label")}</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    placeholder={t("booking_name_placeholder")} 
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label><FaCalendarAlt /> {t("booking_checkin")}</label>
                    <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label><FaCalendarAlt /> {t("booking_checkout")}</label>
                    <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} required />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label><FaUsers /> {t("booking_guests")}</label>
                  <select name="guests" value={form.guests} onChange={handleChange}>
                    <option value="1">1 {t("booking_person")}</option>
                    <option value="2">2 {t("booking_people")}</option>
                    <option value="3">3 {t("booking_people")}</option>
                    <option value="4">4 {t("booking_people")}</option>
                    <option value="5">5 {t("booking_people")}</option>
                    <option value="6">6 {t("booking_people")}</option>
                  </select>
                </div>

                <button type="submit" className={styles.waButtonFull}>
                  <FaWhatsapp /> {t("booking_submit")}
                </button>
                
                <p className={styles.smallNote}>
                  {t("booking_note")}
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