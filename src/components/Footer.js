export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Marca */}
          <div>
            <div className="t-kicker">TIMELESS CORP</div>
            <div className="mt-2 text-lg font-semibold tracking-wide">LIGA TIMELESS</div>
            <p className="mt-2 max-w-sm text-sm text-white/65">
              Liga y comunidad competitiva. Organización clara, eventos constantes y ranking oficial.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="t-kicker">SITIO</div>
              <a className="block text-white/75 hover:text-white" href="/ranking">Ranking</a>
              <a className="block text-white/75 hover:text-white" href="/teams">Equipos</a>
              <a className="block text-white/75 hover:text-white" href="/rules">Rules</a>
            </div>

            <div className="space-y-2">
              <div className="t-kicker">COMUNIDAD</div>
              <a className="block text-white/75 hover:text-white" href="/contact">Contacto</a>
              <a
                className="block text-white/75 hover:text-white"
                href="https://chat.whatsapp.com/BUoU4UgS500JqeEGISiN7t"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="block text-white/75 hover:text-white"
                href="https://www.instagram.com/timeless.recargado?igsh=ZXVxZno4Y205ZW0z&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="block text-white/75 hover:text-white"
                href="https://www.tiktok.com/@timeless.recargado?_r=1&_t=ZS-93HnhuMujhK"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Timeless Corp</div>
          <div>Diseño v2 · Estética oficial galáctica</div>
        </div>
      </div>
    </footer>
  );
}
