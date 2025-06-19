import { useRef, useEffect } from "react";
import "../css/Footer.css";

function Footer() {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Reset src to replay GIF
            logo.src = "/signatureW.gif";
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(logo);

    return () => observer.disconnect();
  }, []);

  return (
    <footer>
      <a
        href="https://github.com/joelbaldapan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="logo"
          ref={logoRef}
          src="/signatureW.gif"
          alt="By Joel Baldapan"
        />
      </a>

      <div id="github">
        <a
          href="https://github.com/joelbaldapan/react-movie-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-logo" src="/github.png" alt="github logo" />
        </a>
        <a
          href="https://github.com/joelbaldapan/react-movie-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>
    </footer>
  );
}

export default Footer;
