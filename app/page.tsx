import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import logo from "../public/logo.webp";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Logo" width={250} height={500} />
          </a>
          <button className="btn btn-primary">Proximamente</button>
        </div>
      </nav>

      {/* Main content with background image */}
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24"
        style={{
          backgroundImage: "url('/fondo.jpg')",
          backgroundSize: "cover",
          position: "relative", 
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            padding: "80px",
          }}
        >

        </div>
        {/* Your existing content here */}
      </main>

      {/* Footer */}
      <footer className="footer mt-auto text-center py-3 bg-gray">
        <div className="container">
          <span className="text-muted">AearaTek @2024</span>
        </div>
      </footer>
    </div>
  );
}
