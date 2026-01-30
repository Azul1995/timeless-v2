const rules = [
  {
    title: "Respeto y 0 toxicidad",
    text: "Cero insultos, provocaciones o acoso. Timeless mantiene un estándar competitivo y serio."
  },
  {
    title: "Permanencia en la comunidad",
    text: "Los miembros de equipos inscritos deben permanecer en la comunidad. Si un jugador se sale, pierde su inscripción."
  },
  {
    title: "Puntualidad",
    text: "La impuntualidad afecta el flujo de la liga. Llega con tiempo y responde a las coordinaciones."
  },
  {
    title: "Juego limpio",
    text: "Prohibido cualquier tipo de trampa, abuso intencional o conducta que comprometa la integridad del torneo."
  },
  {
    title: "Equipos y participación",
    text: "Los equipos deben respetar la organización oficial de la liga y participar con seriedad en los encuentros asignados."
  },
  {
    title: "Decisiones del staff",
    text: "El staff de Timeless es la autoridad final para resolver situaciones, disputas y sanciones."
  }
];

export default function Rules() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="t-kicker">LIGA TIMELESS</div>
        <h1 className="t-h2 mt-4">Rules</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Reglas públicas básicas. Claras, directas y aplicables para todos los equipos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rules.map((r) => (
            <div key={r.title} className="t-card p-7">
              <div className="t-kicker">REGLA</div>
              <h3 className="mt-2 text-xl font-semibold">{r.title}</h3>
              <p className="mt-3 text-sm text-white/70">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 t-card p-7">
          <div className="t-kicker">NOTA</div>
          <p className="mt-2 text-sm text-white/70">
            Estas reglas existen para mantener una competencia justa y una comunidad sana.
            Si tienes dudas, entra a <a className="underline text-white/85" href="/contact">Contact</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
