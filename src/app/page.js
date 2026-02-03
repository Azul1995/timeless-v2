// src/app/page.js
import Link from "next/link";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-semibold text-white/70">
      {children}
    </span>
  );
}

function Card({ kicker, title, desc }) {
  return (
    <div className="rounded-3xl bg-white/[0.045] p-6 ring-1 ring-white/10 backdrop-blur">
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-white/55">
        {kicker}
      </div>
      <div className="mt-2 text-lg font-extrabold text-white/90">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-sm font-extrabold text-white/80">
          {n}
        </div>
        <div className="text-base font-extrabold text-white/90">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="wrap">
      {/* HERO */}
      <section className="mt-8 rounded-[34px] bg-gradient-to-r from-blue-500/20 via-fuchsia-500/20 to-rose-500/20 p-1 ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[32px] bg-black/40 p-8 backdrop-blur">
          {/* glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <div className="text-[11px] font-extrabold tracking-[0.34em] text-white/55">
              TIMELESS CORP · COMUNIDAD · ESPORTS
            </div>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              <span className="text-white/90">LIGA</span>{" "}
              <span className="bg-gradient-to-r from-blue-200 via-fuchsia-200 to-rose-200 bg-clip-text text-transparent">
                TIMELESS
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              No es “una liga y ya”. Es un ecosistema competitivo que crece con
              la comunidad: temporadas, eventos especiales, retos, premios y
              expansión a más juegos. Aquí se compite con orden… y se construye
              algo grande.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
              >
                Entrar a la comunidad
              </Link>
              <Link
                href="/games"
                className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Ver encuentros
              </Link>
              <Link
                href="/ranking"
                className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Ranking oficial
              </Link>
              <Link
                href="/teams"
                className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Equipos
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Multi-juego (expansión)</Pill>
              <Pill>Eventos semanales</Pill>
              <Pill>Premios & retos</Pill>
              <Pill>Reglas públicas</Pill>
              <Pill>Staff activo</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE VALOR - 3 CARDS */}
      <section className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card
          kicker="ORGANIZACIÓN"
          title="Cruces claros, comunicación rápida"
          desc="Encuentros publicados por jornada, formato simple de seguir y anuncios oficiales sin ruido. Menos caos, más competencia real."
        />
        <Card
          kicker="COMPETITIVO"
          title="Se compite por consistencia"
          desc="Aquí gana el que se presenta, juega y rinde. La liga premia el esfuerzo sostenido y el progreso real."
        />
        <Card
          kicker="COMUNIDAD"
          title="Nivel alto, ambiente sano"
          desc="Cero tolerancia al drama: respeto, puntualidad y disciplina. Si vienes a sumar, aquí encajas."
        />
      </section>

      {/* QUÉ ES TIMELESS - SECCIÓN IMPACTO */}
      <section className="mt-10 rounded-3xl bg-white/[0.035] p-8 ring-1 ring-white/10 backdrop-blur">
        <div className="text-[11px] font-extrabold tracking-[0.28em] text-white/55">
          ¿QUÉ ES TIMELESS?
        </div>
        <h2 className="mt-3 text-2xl font-extrabold text-white/92 md:text-3xl">
          Una comunidad que convierte partidas en historia
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
          Timeless nace como liga, pero está diseñada para crecer: torneos
          relámpago, retos creativos (clips, highlights), dinámicas por equipos,
          eventos cross-game y formatos nuevos. El objetivo es que siempre haya
          algo vivo, y que participar valga la pena.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card
            kicker="EVENTOS"
            title="Más que partidas"
            desc="Retos semanales, especiales temáticos, BO3/BO5, desafíos de clips y premios en fechas clave."
          />
          <Card
            kicker="EXPANSIÓN"
            title="Nuevos juegos, misma esencia"
            desc="Wild Rift es el inicio. El sistema y el estándar Timeless se trasladan a más títulos y formatos."
          />
          <Card
            kicker="IDENTIDAD"
            title="Serio, premium, memorable"
            desc="Estética corporativa-esports: limpio, elegante y con presencia. Una marca que se respeta."
          />
        </div>
      </section>

      {/* CÓMO ENTRAR / CÓMO FUNCIONA */}
      <section className="mt-10">
        <div className="text-[11px] font-extrabold tracking-[0.28em] text-white/55">
          CÓMO FUNCIONA
        </div>
        <h3 className="mt-3 text-2xl font-extrabold text-white/92">
          Rápido de entender, duro de ganar
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
          En Timeless todo está hecho para competir sin confusión: entras,
          sigues el calendario, juegas tu serie y subes por rendimiento.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Step
            n="1"
            title="Únete a la comunidad"
            desc="Entra por Contact y cae al centro oficial. Ahí se anuncian eventos, reglas, horarios y convocatorias."
          />
          <Step
            n="2"
            title="Sigue el día"
            desc="En Games ves lo que toca y cuándo. Sin rumores: lo publicado es lo oficial."
          />
          <Step
            n="3"
            title="Compite y escala"
            desc="Resultados visibles, ranking transparente y espacio para destacar en eventos creativos."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 mb-10 rounded-3xl bg-gradient-to-r from-blue-500/15 via-fuchsia-500/15 to-rose-500/15 p-1 ring-1 ring-white/10">
        <div className="rounded-3xl bg-black/45 p-8 backdrop-blur">
          <div className="text-[11px] font-extrabold tracking-[0.34em] text-white/55">
            READY?
          </div>
          <div className="mt-3 text-2xl font-extrabold text-white/95">
            Entra hoy. No es casual — es Timeless.
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
            Si buscas una comunidad con orden, competitividad real y eventos que
            evolucionan, este es tu lugar.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
            >
              Entrar a la comunidad
            </Link>
            <Link
              href="/rules"
              className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              Ver reglas públicas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

