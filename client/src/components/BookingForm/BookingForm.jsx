import { useState } from "react";
import { sendInquiry } from "../../services/api";
import styles from "./BookingForm.module.css";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await sendInquiry(form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.card}>

          <h3 className={styles.title}>Request Booking</h3>

          {success && <div className={styles.success}>Inquiry sent!</div>}
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className={styles.input}
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className={styles.input}
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <button className={styles.button} disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default BookingForm;