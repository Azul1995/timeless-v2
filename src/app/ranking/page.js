import ranking from "@/data/ranking.json";

export default function RankingPage() {
  const sorted = [...ranking].sort(
    (a, b) => b.pts - a.pts || b.tkda - a.tkda
  );

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>
        <h1 className="t-h2 mt-2">Ranking oficial</h1>

        {/* HEADER */}
        <div className="mt-8 t-card px-6 py-4">
          <div className="grid grid-cols-[60px_1fr_100px_100px] text-xs uppercase tracking-wider text-white/50">
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
              className="t-card px-6 py-5 transition hover:bg-white/[0.05]"
            >
              <div className="grid grid-cols-[60px_1fr_100px_100px] items-center">
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
                    <div className="text-xs text-white/50">
                      {i < 3 ? "Top tier" : "Liga"}
                    </div>
                  </div>
                </div>

                {/* PTS */}
                <div className="text-right text-lg font-semibold">
                  {team.pts}
                </div>

                {/* TKDA */}
                <div className="text-right text-white/70">
                  {Number(team.tkda).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
