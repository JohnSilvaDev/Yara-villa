function Hero() {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center text-center"
      style={{ backgroundColor: "#FFEE58" }}
    >
      <div>
        <h1 className="display-3 fw-bold">
          Yara Floating Villa
        </h1>

        <p className="lead mb-4">
          Ride the wind. Live on water.
        </p>

        <a href="#booking" className="btn btn-dark btn-lg px-4">
          Book Your Stay
        </a>
      </div>
    </div>
  );
}

export default Hero;