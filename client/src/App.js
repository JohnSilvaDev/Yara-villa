import { useState, useEffect, useRef } from "react";

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
      console.error("FRONTEND ERROR:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  const aboutRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  const currentRef = aboutRef.current;

  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);

  return (
    <div>

      {/* HERO - YELLOW LUXURY */}
      <div
        className="vh-100 d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundColor: "#FFEE58",
        }}
      >
        <div>

          <h1
            className="display-3 fw-bold"
            style={{
              color: "#000",
              background: "none",
              WebkitTextFillColor: "unset",
              animation: "windFloat 6s ease-in-out infinite",
            }}
          >
            Yara Floating Villa
          </h1>

          <p
            className="lead mb-4"
            style={{ color: "#000" }}
          >
            Ride the wind. Live on water.
          </p>

          <a
            href="#booking"
            className="btn btn-dark btn-lg px-4"
            style={{
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Book Your Stay
          </a>

        </div>
      </div>

      {/* ABOUT */}
<div
  ref={aboutRef}
  className={`container py-5 text-center premium-section ${
    isVisible ? "visible" : ""
  }`}
>
  <h2 className="mb-4 premium-title">
    A Floating Escape for Kitesurfers
  </h2>

  <p className="mx-auto premium-text">
    Wake up surrounded by water, step straight into one of Brazil’s best
    kitesurf spots, and experience a lifestyle where wind, ocean, and
    comfort come together in perfect balance.
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

            <div className="p-4 shadow rounded-4 bg-white">
              <h3 className="text-center mb-4">
                Request Booking
              </h3>

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
      <footer className="text-center py-4">
        <p className="mb-1">
          © {new Date().getFullYear()} Yara Floating Villa
        </p>
        <small>Guriú, Ceará, Brazil</small>
        <p className="mb-1"> <a href="url">https://github.com/JohnSilvaDev</a></p>
      </footer>

      {/* FLOATING BUTTONS */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 999,
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/558888057600?text=Hi%20I%20want%20to%20book%20Yara%20Villa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a4 4 0 0 1-4 4H8l-4 4V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yara_floating_villa/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#E1306C",
            color: "white",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm4.25 5.25A4.75 4.75 0 1 0 16.75 12 4.756 4.756 0 0 0 12 7.25z" />
          </svg>
        </a>
      </div>

    </div>
  );
}

export default App;