import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="floating-container">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/558888057600?text=Hi%20I%20want%20to%20book%20Yara%20Villa"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yara_floating_villa/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn instagram"
      >
        <FaInstagram size={26} />
      </a>

    </div>
  );
}

export default FloatingButtons;