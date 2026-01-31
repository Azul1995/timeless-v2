import ranking from "@/data/ranking.json";

function Badge({ children }) {
  return <span className="t-pill">{children}</span>;
}

export default function Teams() {
  const sorted = [...ranking].sort((a, b) => b.pts - a.pts || b.tkda - a.tkda);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="t-h2">Teams</h1>
            <p className="mt-2 max-w-2xl text-white/70">
              Lista oficial de equipos en la liga. Aquí se publicarán rosters y perfiles
              cuando estén confirmados.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Orden oficial</Badge>
              <Badge>Actualización simple</Badge>
              <Badge>Perfiles próximamente</Badge>
            </div>
          </div>

          {/* Search (visual only por ahora, sin lógica para evitar “client component”) */}
          <div className="t-card p-4 md:min-w-[320px]">
            <div className="t-kicker">BÚSQUEDA</div>
            <div className="mt-2 text-sm text-white/60">
              Próximo paso: búsqueda por nombre de equipo.
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sorted.map((t, idx) => {
            const isTop3 = idx < 3;
            const pts = Number(t.pts) || 0;
            const tkda = Number(t.tkda) || 0;

            return (
              <div
                key={t.team}
                className={`t-card p-7 ${isTop3 ? "bg-white/[0.06]" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-lg font-semibold">{t.team}</div>

                        {idx === 0 && (
                          <span className="rounded-md border border-white/15 bg-white/10 px-2 py-[2px] text-[10px] tracking-wide text-white/80">
                            LEADER
                          </span>
                        )}
                      </div>

                      <div className="mt-1 text-xs text-white/55">
                        Official Team · Timeless League
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-white/55">Rank</div>
                    <div className="text-2xl font-semibold">{idx + 1}</div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>PTS: {pts}</Badge>
<Badge>TKDA: {t.tkda === null ? "—" : Number(t.tkda).toFixed(2)}</Badge>
                  <Badge>Roster: pendiente</Badge>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Perfil del equipo disponible próximamente: rosters confirmados, capitanes y datos oficiales.
                </div>

                <div className="mt-6 flex gap-3">
                  <a className="t-btn" href="/ranking">
                    Ver en ranking
                  </a>
                  <a className="t-btn-primary" href="/contact">
                    Entrar a la comunidad
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-xs text-white/45">
          Nota: Los rosters se publicarán únicamente cuando estén confirmados por la organización.
        </div>
      </div>
    </main>
  );
}
