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
      if (!res.ok) throw new Error(data.error);

      alert("Inquiry sent successfully!");
      setForm({ name: "", email: "", phone: "" });

    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>

      {/* HERO */}
      <div
        className="vh-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-3 fw-bold">Yara Floating Villa</h1>
          <p className="lead mb-4">
            A unique floating escape in Guriú, Ceará
          </p>
          <a href="#booking" className="btn btn-light btn-lg px-4">
            Book Your Stay
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container py-5 text-center">
        <h2 className="mb-4">Experience Nature Like Never Before</h2>
        <p className="mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
          Wake up surrounded by water, feel the wind of one of the best kitesurf
          spots in Brazil, and disconnect in a peaceful floating villa designed
          for relaxation and adventure.
        </p>
      </div>

      {/* GALLERY */}
      <div className="container-fluid px-4 pb-5">
        <div className="row g-3">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div className="col-md-4 overflow-hidden" key={img}>
              <img
                src={`/gallery${img}.jpg`}
                alt="gallery"
                className="img-fluid"
                style={{
                  transition: "transform 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOOKING */}
      <div id="booking" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div
              className="p-4 shadow rounded-4"
              style={{ background: "#fff" }}
            >
              <h3 className="text-center mb-4">Request Booking</h3>

              <form onSubmit={handleSubmit}>
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

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="text-center py-4"
        style={{ background: "#111", color: "#aaa" }}
      >
        <p className="mb-1">© {new Date().getFullYear()} Yara Floating Villa</p>
        <small>Guriú, Ceará, Brazil</small>
      </footer>

    </div>
  );
}

export default App;