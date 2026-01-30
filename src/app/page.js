import Link from "next/link";
import ranking from "@/data/ranking.json";

function Badge({ children }) {
  return <span className="t-pill">{children}</span>;
}

export default function Home() {
  const sorted = [...ranking].sort((a, b) => b.pts - a.pts || b.tkda - a.tkda);
  const top5 = sorted.slice(0, 5);

  return (
    <main className="min-h-screen">
      {/* HERO + TOP 5 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="t-kicker">LIGA ESPORTS · COMUNIDAD</div>

        <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="t-h1">
              LIGA <span className="text-white/70">TIMELESS</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/70">
              Competencia activa, estructura clara y eventos continuos.
              Timeless es una liga creada para jugadores que buscan un entorno serio,
              organizado y con seguimiento real.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/ranking" className="t-btn-primary">
                Ver ranking
              </Link>
              <Link href="/teams" className="t-btn">
                Equipos
              </Link>
              <Link href="/contact" className="t-btn">
                Entrar a la comunidad
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Competencia oficial</Badge>
              <Badge>Eventos constantes</Badge>
              <Badge>Organización real</Badge>
            </div>
          </div>

          <div className="t-card p-7">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="t-kicker">VISTA GENERAL</div>
                <div className="mt-2 text-2xl font-semibold">Top 5</div>
                <div className="mt-1 text-sm text-white/60">
                  Vista rápida del ranking oficial
                </div>
              </div>

              <Link href="/ranking" className="t-btn">
                Ranking completo
              </Link>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-12 bg-white/[0.03] px-4 py-3 text-xs text-white/60">
                <div className="col-span-1">#</div>
                <div className="col-span-7">EQUIPO</div>
                <div className="col-span-2 text-right">PTS</div>
                <div className="col-span-2 text-right">TKDA</div>
              </div>

              <div className="divide-y divide-white/10">
                {top5.map((t, idx) => (
                  <div
                    key={t.team}
                    className={`grid grid-cols-12 items-center px-4 py-3 hover:bg-white/[0.06] transition ${
                      idx === 0 ? "bg-white/[0.03]" : ""
                    }`}
                  >
                    <div className="col-span-1 text-white/80">{idx + 1}</div>

                    <div className="col-span-7 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
                      <div className="min-w-0">
                        <div className="truncate font-medium">{t.team}</div>
                        {idx === 0 && (
                          <div className="mt-1 text-[10px] text-white/55 tracking-wide">
                            LÍDER
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-span-2 text-right font-medium">{t.pts}</div>
                    <div className="col-span-2 text-right text-white/80">
                      {Number(t.tkda).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs text-white/45">
              Ranking oficial actualizado por resultados de la liga.
            </div>
          </div>
        </div>
      </section>

      {/* 3 CARDS (compactas, sin relleno raro) */}
      <section className="mx-auto max-w-6xl px-6 pb-10 grid gap-6 md:grid-cols-3">
        <div className="t-card p-6">
          <div className="t-kicker">COMPETENCIA</div>
          <h3 className="mt-2 text-xl font-semibold">Ranking oficial</h3>
          <p className="mt-2 text-white/70 text-sm">
            Puntos por rendimiento y tabla pública siempre visible para la comunidad.
          </p>
        </div>

        <div className="t-card p-6">
          <div className="t-kicker">COMUNIDAD</div>
          <h3 className="mt-2 text-xl font-semibold">Estructura real</h3>
          <p className="mt-2 text-white/70 text-sm">
            Equipos oficiales, coordinación y reglas claras para mantener el estándar.
          </p>
        </div>

        <div className="t-card p-6">
          <div className="t-kicker">EVENTOS</div>
          <h3 className="mt-2 text-xl font-semibold">Actividad constante</h3>
          <p className="mt-2 text-white/70 text-sm">
            Jornadas, anuncios y dinámicas que mantienen la liga viva semana a semana.
          </p>
        </div>
      </section>

      {/* INFO REAL (pulido y sin info de staff) */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="t-card p-7">
          <div className="t-kicker">LIGA TIMELESS</div>
          <h3 className="mt-3 text-2xl font-semibold">
            Organización real. Competencia clara.
          </h3>
          <p className="mt-3 max-w-3xl text-sm text-white/70">
            Timeless es una liga competitiva creada por la comunidad con reglas públicas y ranking oficial.
            La tabla se define por resultados y, cuando hay empate, el rendimiento marca la diferencia.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="t-kicker">RANKING</div>
              <div className="mt-2 font-semibold">Resultados y puntos</div>
              <div className="mt-1 text-sm text-white/70">
                La liga premia ganar y competir: el ranking se construye con partidos reales.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="t-kicker">DESEMPATE</div>
              <div className="mt-2 font-semibold">Rendimiento</div>
              <div className="mt-1 text-sm text-white/70">
                Si hay empate en puntos, se usa el rendimiento como criterio de desempate.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="t-kicker">REGLAS</div>
              <div className="mt-2 font-semibold">Públicas</div>
              <div className="mt-1 text-sm text-white/70">
                Respeto, puntualidad y permanencia en la comunidad para sostener el nivel.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="t-btn" href="/rules">
              Ver Rules
            </Link>
            <Link className="t-btn" href="/ranking">
              Ver ranking
            </Link>
            <Link className="t-btn-primary" href="/contact">
              Entrar a la comunidad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
