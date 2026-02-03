import Image from "next/image";
import ranking from "@/data/ranking.json";
import { getTeamLogo } from "@/lib/teamlogos";

function getTeamInitials(name = "") {
  const cleaned = String(name).trim();
  if (!cleaned) return "—";

  // Evita palabras relleno comunes
  const stop = new Set(["of", "the", "and", "de", "la", "los", "las", "del"]);

  const parts = cleaned
    .split(/\s+/)
    .map((p) => p.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean)
    .filter((p) => !stop.has(p.toLowerCase()));

  if (parts.length === 0) return cleaned.slice(0, 2).toUpperCase();

  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function fmtTkda(v) {
  return v === null || v === undefined || v === "—" ? "—" : Number(v).toFixed(2);
}

export default function RankingPage() {
  // Orden: PTS desc, luego TKDA desc (null/— al final)
  const rows = [...(ranking?.teams || ranking || [])].sort((a, b) => {
    const ap = Number(a?.pts ?? 0);
    const bp = Number(b?.pts ?? 0);
    if (bp !== ap) return bp - ap;

    const at = a?.tkda === null || a?.tkda === undefined || a?.tkda === "—" ? -1 : Number(a.tkda);
    const bt = b?.tkda === null || b?.tkda === undefined || b?.tkda === "—" ? -1 : Number(b.tkda);
    return bt - at;
  });

  return (
    <main className="min-h-screen bg-[#070712] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.28em] text-white/55">RANKING OFICIAL</div>
            <h1 className="mt-2 text-[32px] font-extrabold tracking-[-0.02em] sm:text-[40px]">
              Liga <span className="text-white/90">Timeless</span>
            </h1>
            <p className="mt-2 max-w-2xl text-[14px] leading-[1.65] text-white/72">
              Ordenado por <span className="text-white/90 font-semibold">PTS</span>. En empate, define{" "}
              <span className="text-white/90 font-semibold">TKDA</span>. (Si falta TKDA, aparece como “—”.)
            </p>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur">
          <div className="grid grid-cols-[72px_1fr_120px_120px] gap-0 border-b border-white/10 bg-white/[0.04] px-4 py-3 text-[12px] font-bold text-white/70">
            <div>POS</div>
            <div>EQUIPO</div>
            <div className="text-right">PTS</div>
            <div className="text-right">TKDA</div>
          </div>

          <div className="divide-y divide-white/10">
            {rows.map((t, idx) => {
              const name = t?.team ?? t?.name ?? "—";
              const logo = getTeamLogo(name);
              const pts = Number(t?.pts ?? 0);
              const tkda = fmtTkda(t?.tkda);

              return (
                <div
                  key={`${name}-${idx}`}
                  className="grid grid-cols-[72px_1fr_120px_120px] items-center gap-0 px-4 py-4 hover:bg-white/[0.04]"
                >
                  <div className="text-[14px] font-extrabold text-white/75">{idx + 1}</div>

                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      {logo ? (
                        <Image
                          src={logo}
                          alt={`${name} logo`}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-[12px] font-extrabold text-white/70">
                          {getTeamInitials(name)}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-[14px] font-extrabold">{name}</div>
                      <div className="mt-0.5 text-[12px] text-white/55">
                        {t?.tag ? String(t.tag) : "—"}
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-[14px] font-extrabold text-white/85">{pts}</div>
                  <div className="text-right text-[14px] font-extrabold text-white/85">{tkda}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
