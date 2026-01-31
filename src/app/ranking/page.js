import ranking from "@/data/ranking.json";

export default function RankingPage() {
  // Sort: PTS desc, then TKDA desc (null goes last)
  const sorted = [...ranking].sort((a, b) => {
    const ptsDiff = (b.pts ?? 0) - (a.pts ?? 0);
    if (ptsDiff !== 0) return ptsDiff;
    const aTk = a.tkda ?? -Infinity;
    const bTk = b.tkda ?? -Infinity;
    return bTk - aTk;
  });

  const top3 = sorted.slice(0, 3);
  const fmtTkda = (v) =>
    v === null || v === undefined ? "—" : Number(v).toFixed(2);

  const StatStack = ({ pts, tkda }) => (
    <div className="text-right leading-tight">
      <div className="text-[10px] uppercase tracking-wider text-white/40">PTS</div>
      <div className="text-lg font-semibold">{Number(pts ?? 0)}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">TKDA</div>
      <div className="text-sm font-medium text-white/70">{fmtTkda(tkda)}</div>
    </div>
  );

  const TierLabel = ({ i }) => (
    <div className="text-xs text-white/50">{i < 3 ? "Top tier" : "Liga"}</div>
  );

  // Degradado por posición (TOP -> más fuerte / BOTTOM -> más suave)
  const rowOverlayStyle = (i, total) => {
    const denom = Math.max(1, total - 1);
    const t = i / denom; // 0 = top, 1 = bottom
    const opacity = 0.22 - t * 0.14; // 0.22 -> 0.08
    const topBoost = i < 3 ? 0.06 : 0; // extra para top 3
    const finalOpacity = Math.max(0.06, opacity + topBoost);

    return {
      opacity: finalOpacity,
      background:
        // Timeless vibe: púrpura -> vinotinto -> azul (muy sutil)
        "linear-gradient(90deg, rgba(140,90,255,0.55), rgba(180,60,120,0.35), rgba(60,140,255,0.40))",
    };
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>
        <h1 className="t-h2 mt-2">Ranking oficial</h1>

        {/* TOP 3 */}
        <div className="mt-8 t-card px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-wider text-white/50">Top 3</div>
            <div className="text-xs text-white/40">PTS primero • TKDA desempate</div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {top3.map((t, idx) => {
              const place = idx + 1;
              const medal = place === 1 ? "🏅" : place === 2 ? "🥈" : "🥉";
              const isLeader = place === 1;

              return (
                <div
                  key={t.team}
                  className={[
                    "rounded-2xl border px-4 py-4 relative overflow-hidden",
                    isLeader
                      ? "border-white/20 bg-white/[0.06]"
                      : "border-white/12 bg-white/[0.04]",
                  ].join(" ")}
                >
                  {/* overlay sutil */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      opacity: isLeader ? 0.18 : 0.12,
                      background:
                        "linear-gradient(90deg, rgba(140,90,255,0.55), rgba(180,60,120,0.35), rgba(60,140,255,0.40))",
                    }}
                  />
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-white/50">
                          {medal} Posición {place}
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="font-semibold">{t.team}</div>
                          {isLeader && (
                            <span className="rounded-md border border-white/15 bg-white/10 px-2 py-[2px] text-[10px]">
                              LÍDER
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-xs text-white/50">
                          {place === 1 ? "Dominio actual" : "En persecución"}
                        </div>
                      </div>
                    </div>

                    <StatStack pts={t.pts} tkda={t.tkda} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HEADER */}
        <div className="mt-10 t-card px-6 py-4">
          <div className="grid grid-cols-[60px_1fr_120px_120px] text-xs uppercase tracking-wider text-white/50">
            <div>POS</div>
            <div>EQUIPO</div>
            <div className="text-right">PTS</div>
            <div className="text-right">TKDA</div>
          </div>
        </div>

        {/* ROWS */}
        <div className="mt-2 space-y-2">
          {sorted.map((team, i) => (
            <div
              key={team.team}
              className="t-card px-6 py-5 transition hover:bg-white/[0.05] relative overflow-hidden"
            >
              {/* Degradado por posición */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={rowOverlayStyle(i, sorted.length)}
              />

              <div className="relative grid grid-cols-[60px_1fr_120px_120px] items-center">
                {/* POS */}
                <div className="text-sm text-white/70">{i + 1}</div>

                {/* TEAM */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10" />
                  <div>
                    <div className="flex items-center gap-2 font-medium">
                      {team.team}
                      {i === 0 && (
                        <span className="rounded-md border border-white/15 bg-white/10 px-2 py-[2px] text-[10px]">
                          LÍDER
                        </span>
                      )}
                    </div>
                    <TierLabel i={i} />
                  </div>
                </div>

                {/* PTS */}
                <div className="text-right text-lg font-semibold">
                  {Number(team.pts ?? 0)}
                </div>

                {/* TKDA */}
                <div className="text-right text-white/70">{fmtTkda(team.tkda)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
