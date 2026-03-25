function Footer() {
  return (
    <footer className="text-center py-4">
      <p className="mb-1">
        © {new Date().getFullYear()} Yara Floating Villa
      </p>
      <small>Guriú, Ceará, Brazil</small>

      <p className="mb-1">
        <a href="https://github.com/JohnSilvaDev">
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;