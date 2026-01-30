export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">CENTRAL</div>
        <h1 className="t-h2 mt-4">Contacto</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Un único lugar para entrar a la comunidad y seguir las redes oficiales.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* CTA principal */}
          <div className="t-card p-7">
            <div className="t-kicker">CTA PRINCIPAL</div>
            <h2 className="mt-3 text-2xl font-semibold">Entrar a la comunidad</h2>
            <p className="mt-2 text-white/70 text-sm">
              Únete al WhatsApp oficial para participar en eventos, anuncios y coordinación de partidas.
            </p>

            <a
              className="t-btn-primary mt-6 w-full"
              href="https://chat.whatsapp.com/BUoU4UgS500JqeEGISiN7t"
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
            </a>

            <div className="mt-4 text-xs text-white/45">
              Link oficial de Timeless Corp.
            </div>
          </div>

          {/* Redes */}
          <div className="t-card p-7">
            <div className="t-kicker">REDES OFICIALES</div>
            <h2 className="mt-3 text-2xl font-semibold">Síguenos</h2>
            <p className="mt-2 text-white/70 text-sm">
              Clips, anuncios y contenido de la liga.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                className="t-btn w-full"
                href="https://www.instagram.com/timeless.recargado?igsh=ZXVxZno4Y205ZW0z&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                className="t-btn w-full"
                href="https://www.tiktok.com/@timeless.recargado?_r=1&_t=ZS-93HnhuMujhK"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              Recomendación: usa el WhatsApp para ser parte de la comunidad de forma mas cercana.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
