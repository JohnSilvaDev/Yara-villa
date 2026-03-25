import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      alert("Inquiry sent successfully!");
      setForm({ name: "", email: "", phone: "" });

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
}

export default BookingForm;