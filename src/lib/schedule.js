// src/lib/schedule.js

function normalizeName(s) {
  return String(s || "").trim();
}

function buildRankMap(rankingList) {
  // rankingList debe estar ORDENADA (pos 1 arriba)
  // rankMap[name] = position (1..n). Menor = mejor.
  const map = new Map();
  rankingList.forEach((t, idx) => map.set(normalizeName(t.team), idx + 1));
  return map;
}

function sortByRank(names, rankMap) {
  return [...names].sort((x, y) => {
    const rx = rankMap.get(normalizeName(x)) ?? 9999;
    const ry = rankMap.get(normalizeName(y)) ?? 9999;
    return rx - ry;
  });
}

function pairSequential(list) {
  const pairs = [];
  const pending = [];
  for (let i = 0; i < list.length; i += 2) {
    if (i + 1 < list.length) pairs.push([list[i], list[i + 1]]);
    else pending.push(list[i]);
  }
  return { pairs, pending };
}

/**
 * Genera matches para el nextDay usando resultados de fromDay:
 * - Ganadores vs Ganadores
 * - Perdedores vs Perdedores
 * - Cruce especial: peor ganador vs mejor perdedor (según ranking)
 */
export function generateNextDayMatches({ fromDay, rankingList, boDefault = "BO1" }) {
  if (!fromDay?.matches?.length) {
    return { matches: [], waiting: [], reason: "NO_SOURCE_MATCHES" };
  }

  // Validar que ya hay ganadores en TODOS
  const allHaveWinner = fromDay.matches.every((m) => normalizeName(m.winner));
  if (!allHaveWinner) {
    return { matches: [], waiting: [], reason: "INCOMPLETE_RESULTS" };
  }

  const rankMap = buildRankMap(rankingList);

  const winners = [];
  const losers = [];

  for (const m of fromDay.matches) {
    const a = normalizeName(m.a);
    const b = normalizeName(m.b);
    const w = normalizeName(m.winner);

    if (w !== a && w !== b) {
      return { matches: [], waiting: [], reason: `INVALID_WINNER:${m.id}` };
    }

    winners.push(w);
    losers.push(w === a ? b : a);
  }

  const winnersSorted = sortByRank(winners, rankMap);
  const losersSorted = sortByRank(losers, rankMap);

  // Cruce especial: peor ganador vs mejor perdedor
  let cross = null;
  if (winnersSorted.length > 0 && losersSorted.length > 0) {
    const worstWinner = winnersSorted[winnersSorted.length - 1];
    const bestLoser = losersSorted[0];
    cross = [worstWinner, bestLoser];

    // removerlos
    winnersSorted.pop();
    losersSorted.shift();
  }

  // Pairing del resto
  const wPairs = pairSequential(winnersSorted);
  const lPairs = pairSequential(losersSorted);

  const matches = [];
  let idx = 1;

  if (cross) {
    matches.push({
      id: `auto-${fromDay.id}-x`,
      a: cross[0],
      b: cross[1],
      bo: boDefault,
      tag: "CRUCE",
      winner: null
    });
  }

  for (const [a, b] of wPairs.pairs) {
    matches.push({ id: `auto-${fromDay.id}-w${idx++}`, a, b, bo: boDefault, tag: "GANADORES", winner: null });
  }

  idx = 1;
  for (const [a, b] of lPairs.pairs) {
    matches.push({ id: `auto-${fromDay.id}-l${idx++}`, a, b, bo: boDefault, tag: "PERDEDORES", winner: null });
  }

  const waiting = [...wPairs.pending, ...lPairs.pending].map((team) => ({
    team,
    reason: "EN_ESPERA"
  }));

  return { matches, waiting, reason: "OK" };
}
