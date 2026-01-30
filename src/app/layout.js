import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Timeless Corp",
  description: "Liga y comunidad competitiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white">
        {/* fondo “galáctico” simple */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(900px_circle_at_80%_20%,rgba(168,85,247,0.14),transparent_60%),radial-gradient(800px_circle_at_50%_90%,rgba(139,0,45,0.12),transparent_60%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:26px_26px]" />
        </div>

<NavBar />
<div className="min-h-[calc(100vh-120px)]">{children}</div>
<Footer />
      </body>
    </html>
  );
}
