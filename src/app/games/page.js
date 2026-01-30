"use client";

import { useMemo, useState } from "react";
import data from "@/data/games.json";

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl px-4 py-2 text-sm transition border",
        active
          ? "bg-white/12 text-white border-white/15"
          : "bg-white/5 text-white/75 border-white/10 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function MatchRow({ left, right, format }) {
  return (
    <div className="t-card p-6">
      <div className="grid gap-4 md:grid-cols-3 md:items-center">
        <div className="flex items-center gap-4 min-w-0">
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5" />
          <div className="truncate text-lg font-semibold">{left}</div>
        </div>

        <div className="text-center">
          <div className="text-sm text-white/60">VS</div>
          <div className="mt-1 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {format}
          </div>
        </div>

        <div className="flex items-center gap-4 md:justify-end min-w-0">
          <div className="truncate text-lg font-semibold">{right}</div>
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default function Games() {
  const days = data.days || {};
  const dayKeys = ["viernes", "sabado", "domingo"].filter((k) => days[k]);

  const initialKey = dayKeys.includes(data.activeDay) ? data.activeDay : dayKeys[0];
  const [activeKey, setActiveKey] = useState(initialKey);

  const activeDay = useMemo(() => days[activeKey] || null, [days, activeKey]);
  const matches = activeDay?.matches || [];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>

        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="t-h2">Encuentros</h1>
            <p className="mt-2 text-white/70">
              Calendario por jornada. Selecciona el día para ver los cruces.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {dayKeys.map((k) => (
              <TabButton key={k} active={k === activeKey} onClick={() => setActiveKey(k)}>
                {days[k]?.label || k}
              </TabButton>
            ))}
          </div>
        </div>

        <div className="mt-6 t-card p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="t-kicker">JORNADA</div>
              <div className="mt-1 text-xl font-semibold">{activeDay?.label || "—"}</div>
              <div className="mt-1 text-sm text-white/70">{activeDay?.note || ""}</div>
            </div>

            <div className="t-pill">
              {matches.length > 0 ? `${matches.length} encuentros` : "Pendiente"}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {matches.length === 0 ? (
            <div className="t-card p-7">
              <div className="t-kicker">PENDIENTE</div>
              <div className="mt-2 text-xl font-semibold">Aún no hay encuentros confirmados</div>
              <p className="mt-2 text-sm text-white/70">
                Este día se definirá según los resultados de la jornada anterior.
              </p>
            </div>
          ) : (
            matches.map((m, idx) => (
              <MatchRow
                key={`${m.left}-${m.right}-${idx}`}
                left={m.left}
                right={m.right}
                format={m.format || "BO1"}
              />
            ))
          )}
        </div>

        <div className="mt-10 text-xs text-white/45">
          Los encuentros pueden actualizarse según resultados y disponibilidad.
        </div>
      </div>
    </main>
  );
}
