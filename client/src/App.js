import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("RESPONSE:", data);

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      alert("Inquiry sent successfully! ✅");

      setForm({ name: "", email: "", phone: "" });

    } catch (error) {
      console.error("FRONTEND ERROR:", error);
      alert("Failed to send inquiry. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <div
        className="vh-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "30px", borderRadius: "20px" }}>
          <h1 className="display-4">Yara Floating Villa</h1>
          <p className="lead">Live on the water. Feel the wind.</p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container py-5 text-center">
        <h2>A Unique Experience</h2>
        <p>
          A floating villa in Guriú, Ceará. Wake up surrounded by water, kitesurf
          straight from your doorstep, and experience total connection with nature.
        </p>
      </div>

      {/* GALLERY */}
      <div className="container-fluid">
        <div className="row g-2">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div className="col-md-4" key={img}>
              <img
                src={`/gallery${img}.jpg`}
                className="img-fluid"
                alt="gallery"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOOKING FORM */}
      <div className="container py-5 text-center">
        <h2>Request Booking</h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            className="form-control mb-3"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <button
            className="btn btn-dark w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-3 text-muted">
        © {new Date().getFullYear()} Yara Floating Villa
      </footer>
    </div>
  );
}

export default App;