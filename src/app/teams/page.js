// src/app/teams/page.js
import Image from "next/image";
import ranking from "@/data/ranking.json";
import { getTeamLogo } from "@/lib/teamlogos";

export default function TeamsPage() {
  // ordena por pts/tkda como ranking para que sea consistente
  const teams = [...ranking].sort((a, b) => {
    const ptsDiff = (b.pts ?? 0) - (a.pts ?? 0);
    if (ptsDiff !== 0) return ptsDiff;
    const aTk = a.tkda ?? -Infinity;
    const bTk = b.tkda ?? -Infinity;
    return bTk - aTk;
  });

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>
        <h1 className="t-h2 mt-2">Equipos</h1>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => {
            const logo = getTeamLogo(t.team);

            return (
              <div key={t.team} className="t-card p-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: 0.12,
                    background:
                      "linear-gradient(90deg, rgba(140,90,255,0.55), rgba(180,60,120,0.35), rgba(60,140,255,0.40))",
                  }}
                />
                <div className="relative flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                    {logo ? (
                      <Image
                        src={logo}
                        alt={`${t.team} logo`}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-cover"
                      />
                    ) : (
                      <div className="h-12 w-12 bg-white/5" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="font-semibold truncate">{t.team}</div>
                    <div className="text-xs text-white/50">
                      PTS: {Number(t.pts ?? 0)} · TKDA:{" "}
                      {t.tkda === null || t.tkda === undefined
                        ? "—"
                        : Number(t.tkda).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
