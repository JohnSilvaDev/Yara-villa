import { useEffect, useRef, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const ref = aboutRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`container py-5 text-center ${
        isVisible ? "visible" : ""
      }`}
    >
      <h2 className="mb-4">
        A Floating Escape for Kitesurfers
      </h2>

      <p className="mx-auto">
        Wake up surrounded by water, step straight into one of Brazil’s best
        kitesurf spots, and experience a lifestyle where wind, ocean, and
        comfort come together in perfect balance.
      </p>
    </div>
  );
}

export default About;