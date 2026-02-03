// src/app/games/page.js
import Image from "next/image";
import ranking from "@/data/ranking.json";
import { getTeamLogo, getTeamInitials } from "@/lib/teamlogos";

// ---------- helpers ----------
function sortRanking(data) {
  return [...data].sort((a, b) => {
    const ptsDiff = (b.pts ?? 0) - (a.pts ?? 0);
    if (ptsDiff !== 0) return ptsDiff;
    const aTk = a.tkda ?? -Infinity;
    const bTk = b.tkda ?? -Infinity;
    return bTk - aTk;
  });
}

function LogoBadge({ name }) {
  const logo = getTeamLogo(name);

  return (
    <div className="relative h-12 w-12 rounded-xl border border-white/10 bg-white/5 overflow-hidden shrink-0">
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="48px"
          className="object-cover"
        />
      ) : (
        <div className="h-full w-full grid place-items-center text-[12px] font-extrabold tracking-wide text-white/80">
          {getTeamInitials(name)}
        </div>
      )}
    </div>
  );
}

function TeamPill({ name, sub }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur">
      <div className="min-w-0">
        <div className="truncate text-[15px] font-semibold text-white/90">
          {name}
        </div>
        <div className="mt-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70">
          {sub}
        </div>
      </div>
      <LogoBadge name={name} />
    </div>
  );
}

function MatchCard({ code, left, right }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-white/55">
        {code}
      </div>

      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <LogoBadge name={left} />
          <div className="truncate font-semibold text-white/90">{left}</div>
        </div>

        <div className="text-xs font-extrabold tracking-[0.28em] text-white/40">
          VS
        </div>

        <div className="flex items-center justify-end gap-3 min-w-0">
          <div className="truncate text-right font-semibold text-white/90">
            {right}
          </div>
          <LogoBadge name={right} />
        </div>
      </div>

      <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-extrabold text-white/70">
        BO3
      </div>
    </div>
  );
}

function WinnerBox({ label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-white/55">
        {label}
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white/70">
        Ganador del cruce anterior
      </div>
    </div>
  );
}

// ---------- page ----------
export default function GamesPage() {
  const sorted = sortRanking(ranking);

  // Top 6 clasifican directo (Semana 4)
  const top6 = sorted.slice(0, 6).map((t) => t.team);

  // Puestos 7 a 14 juegan llave BO3 (Semana 3) para definir 2 cupos.
  const seeds7to14 = sorted.slice(6, 14).map((t) => t.team);

  // Si por alguna razón faltan equipos, rellenamos con TBD para no romper UI.
  const safe = (arr, i, fallback) => arr[i] ?? fallback;

  // Sembrado estándar:
  // QF1: #7 vs #14
  // QF2: #8 vs #13
  // QF3: #9 vs #12
  // QF4: #10 vs #11
  const qf1 = { left: safe(seeds7to14, 0, "TBD #7"), right: safe(seeds7to14, 7, "TBD #14") };
  const qf2 = { left: safe(seeds7to14, 1, "TBD #8"), right: safe(seeds7to14, 6, "TBD #13") };
  const qf3 = { left: safe(seeds7to14, 2, "TBD #9"), right: safe(seeds7to14, 5, "TBD #12") };
  const qf4 = { left: safe(seeds7to14, 3, "TBD #10"), right: safe(seeds7to14, 4, "TBD #11") };

  return (
    <main className="wrap">
      <header className="mt-8">
        <div className="t-kicker">LIGA TIMELESS</div>
        <h1 className="t-h2 mt-2">Llave — Semana 3</h1>
        <p className="mt-2 max-w-3xl text-white/70">
          Top 6 clasifica directo. Puestos 7 a 14 juegan una llave BO3 para definir 2 cupos.
        </p>
      </header>

      {/* CLASIFICADOS SEMANA 4 */}
      <section className="mt-8 t-card p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-xs font-extrabold tracking-[0.28em] text-white/60">
              CLASIFICADOS
            </div>
            <div className="mt-2 text-2xl font-extrabold text-white/90">
              Semana 4
            </div>
            <div className="mt-1 text-sm text-white/65">
              6 directos + 2 cupos desde la llave de Semana 3.
            </div>
          </div>

          <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            8 cupos
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {top6.map((name) => (
            <TeamPill key={name} name={name} sub="CLASIFICADO — Semana 4" />
          ))}

          <TeamPill
            name="TBD — Clasificado #7"
            sub="CUPO DISPONIBLE — Sale de la llave"
          />
          <TeamPill
            name="TBD — Clasificado #8"
            sub="CUPO DISPONIBLE — Sale de la llave"
          />
        </div>
      </section>

      {/* LLAVE SEMANA 3 */}
      <section className="mt-10">
        <div className="text-xs font-extrabold tracking-[0.28em] text-white/60">
          SEMANA 3
        </div>
        <h2 className="mt-2 text-2xl font-extrabold text-white/90">
          Llave de eliminación
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          Son BO3. No hay final: se juegan cuartos y semifinales. Los 2 ganadores clasifican.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* CUARTOS */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold tracking-[0.28em] text-white/60">
              CUARTOS
            </div>

            <MatchCard code="QF 1" left={qf1.left} right={qf1.right} />
            <MatchCard code="QF 2" left={qf2.left} right={qf2.right} />
            <MatchCard code="QF 3" left={qf3.left} right={qf3.right} />
            <MatchCard code="QF 4" left={qf4.left} right={qf4.right} />
          </div>

          {/* SEMIS */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold tracking-[0.28em] text-white/60">
              SEMIFINALES
            </div>

            <WinnerBox label="SF A (Ganador QF 1 vs Ganador QF 4)" />
            <WinnerBox label="SF B (Ganador QF 2 vs Ganador QF 3)" />
          </div>

          {/* CUPOS */}
          <div className="space-y-4">
            <div className="text-xs font-extrabold tracking-[0.28em] text-white/60">
              CUPOS A SEMANA 4
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="text-xs font-extrabold tracking-[0.28em] text-white/55">
                CLASIFICAN (2)
              </div>
              <div className="mt-3 text-sm text-white/70">
                Los ganadores de SF A y SF B ocupan los 2 puestos libres en Semana 4.
              </div>

              <div className="mt-5 space-y-3">
                <TeamPill name="TBD — Clasificado #7" sub="Sale de SF A" />
                <TeamPill name="TBD — Clasificado #8" sub="Sale de SF B" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
