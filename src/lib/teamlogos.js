// src/lib/teamlogos.js

// Mapa explícito para evitar fallos por apóstrofes raros o nombres con variaciones.
// Tus imágenes viven en /public/teams/...
export const teamLogos = {
  "Banana Freedom": "/teams/bananafreedom.jpg",
  "Dracarys DRCS": "/teams/dracarys.jpg",
  "Pussy’s Destroyers": "/teams/pussysdestroyers.jpg",
  "Pussy's Destroyers": "/teams/pussysdestroyers.jpg",
  "Titans of the Rift": "/teams/tintansoftherift.jpg", // tu filename está así (typo en el nombre)
  "Troll World E-sport": "/teams/trollworde-sport.jpg",
  "Tyrants": "/teams/tyrants.jpg",
};

// Normaliza: espacios y apóstrofe tipográfico ’ -> '
function cleanName(name = "") {
  return String(name)
    .trim()
    .replace(/\u2019/g, "'")
    .replace(/\s+/g, " ");
}

export function getTeamLogo(teamName) {
  const n = cleanName(teamName);
  return teamLogos[n] || null;
}

export function getTeamInitials(teamName) {
  const n = cleanName(teamName);
  if (!n) return "—";

  const words = n
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
