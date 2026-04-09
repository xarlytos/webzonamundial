export interface Partido {
  id: string;
  grupo: string;
  jornada: number;
  fecha: string; // ISO 8601 UTC
  estadio: string;
  ciudad: string;
  homeSlug: string;
  awaySlug: string;
}

export const CALENDARIO: Partido[] = [
  // =============================================
  // GRUPO A: mexico, corea-del-sur, sudafrica, republica-checa
  // =============================================
  // Jornada 1 — 11 jun
  { id: "A1", grupo: "A", jornada: 1, fecha: "2026-06-11T19:00:00Z", estadio: "Estadio Azteca", ciudad: "Ciudad de México", homeSlug: "mexico", awaySlug: "corea-del-sur" },
  { id: "A2", grupo: "A", jornada: 1, fecha: "2026-06-11T22:00:00Z", estadio: "MetLife Stadium", ciudad: "Nueva York/Nueva Jersey", homeSlug: "sudafrica", awaySlug: "republica-checa" },
  // Jornada 2 — 16 jun
  { id: "A3", grupo: "A", jornada: 2, fecha: "2026-06-16T16:00:00Z", estadio: "Estadio Azteca", ciudad: "Ciudad de México", homeSlug: "mexico", awaySlug: "sudafrica" },
  { id: "A4", grupo: "A", jornada: 2, fecha: "2026-06-16T19:00:00Z", estadio: "Gillette Stadium", ciudad: "Boston", homeSlug: "corea-del-sur", awaySlug: "republica-checa" },
  // Jornada 3 — 24 jun (simultáneos)
  { id: "A5", grupo: "A", jornada: 3, fecha: "2026-06-24T19:00:00Z", estadio: "Estadio Azteca", ciudad: "Ciudad de México", homeSlug: "mexico", awaySlug: "republica-checa" },
  { id: "A6", grupo: "A", jornada: 3, fecha: "2026-06-24T19:00:00Z", estadio: "MetLife Stadium", ciudad: "Nueva York/Nueva Jersey", homeSlug: "corea-del-sur", awaySlug: "sudafrica" },

  // =============================================
  // GRUPO B: canada, suiza, qatar, bosnia
  // =============================================
  // Jornada 1 — 11 jun
  { id: "B1", grupo: "B", jornada: 1, fecha: "2026-06-11T13:00:00Z", estadio: "BMO Field", ciudad: "Toronto", homeSlug: "canada", awaySlug: "suiza" },
  { id: "B2", grupo: "B", jornada: 1, fecha: "2026-06-11T16:00:00Z", estadio: "NRG Stadium", ciudad: "Houston", homeSlug: "qatar", awaySlug: "bosnia" },
  // Jornada 2 — 16 jun
  { id: "B3", grupo: "B", jornada: 2, fecha: "2026-06-16T13:00:00Z", estadio: "BC Place", ciudad: "Vancouver", homeSlug: "canada", awaySlug: "qatar" },
  { id: "B4", grupo: "B", jornada: 2, fecha: "2026-06-16T22:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "suiza", awaySlug: "bosnia" },
  // Jornada 3 — 24 jun (simultáneos)
  { id: "B5", grupo: "B", jornada: 3, fecha: "2026-06-24T16:00:00Z", estadio: "BMO Field", ciudad: "Toronto", homeSlug: "canada", awaySlug: "bosnia" },
  { id: "B6", grupo: "B", jornada: 3, fecha: "2026-06-24T16:00:00Z", estadio: "AT&T Stadium", ciudad: "Dallas", homeSlug: "suiza", awaySlug: "qatar" },

  // =============================================
  // GRUPO C: brasil, marruecos, haiti, escocia
  // =============================================
  // Jornada 1 — 12 jun
  { id: "C1", grupo: "C", jornada: 1, fecha: "2026-06-12T19:00:00Z", estadio: "SoFi Stadium", ciudad: "Los Ángeles", homeSlug: "brasil", awaySlug: "marruecos" },
  { id: "C2", grupo: "C", jornada: 1, fecha: "2026-06-12T22:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "haiti", awaySlug: "escocia" },
  // Jornada 2 — 17 jun
  { id: "C3", grupo: "C", jornada: 2, fecha: "2026-06-17T16:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "brasil", awaySlug: "haiti" },
  { id: "C4", grupo: "C", jornada: 2, fecha: "2026-06-17T19:00:00Z", estadio: "Lumen Field", ciudad: "Seattle", homeSlug: "marruecos", awaySlug: "escocia" },
  // Jornada 3 — 25 jun (simultáneos)
  { id: "C5", grupo: "C", jornada: 3, fecha: "2026-06-25T19:00:00Z", estadio: "SoFi Stadium", ciudad: "Los Ángeles", homeSlug: "brasil", awaySlug: "escocia" },
  { id: "C6", grupo: "C", jornada: 3, fecha: "2026-06-25T19:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "marruecos", awaySlug: "haiti" },

  // =============================================
  // GRUPO D: estados-unidos, australia, paraguay, turquia
  // =============================================
  // Jornada 1 — 12 jun
  { id: "D1", grupo: "D", jornada: 1, fecha: "2026-06-12T13:00:00Z", estadio: "Mercedes-Benz Stadium", ciudad: "Atlanta", homeSlug: "estados-unidos", awaySlug: "australia" },
  { id: "D2", grupo: "D", jornada: 1, fecha: "2026-06-12T16:00:00Z", estadio: "AT&T Stadium", ciudad: "Dallas", homeSlug: "paraguay", awaySlug: "turquia" },
  // Jornada 2 — 17 jun
  { id: "D3", grupo: "D", jornada: 2, fecha: "2026-06-17T13:00:00Z", estadio: "NRG Stadium", ciudad: "Houston", homeSlug: "estados-unidos", awaySlug: "paraguay" },
  { id: "D4", grupo: "D", jornada: 2, fecha: "2026-06-17T22:00:00Z", estadio: "Levi's Stadium", ciudad: "San Francisco", homeSlug: "australia", awaySlug: "turquia" },
  // Jornada 3 — 25 jun (simultáneos)
  { id: "D5", grupo: "D", jornada: 3, fecha: "2026-06-25T22:00:00Z", estadio: "Mercedes-Benz Stadium", ciudad: "Atlanta", homeSlug: "estados-unidos", awaySlug: "turquia" },
  { id: "D6", grupo: "D", jornada: 3, fecha: "2026-06-25T22:00:00Z", estadio: "Arrowhead Stadium", ciudad: "Kansas City", homeSlug: "australia", awaySlug: "paraguay" },

  // =============================================
  // GRUPO E: alemania, curazao, costa-de-marfil, ecuador
  // =============================================
  // Jornada 1 — 13 jun
  { id: "E1", grupo: "E", jornada: 1, fecha: "2026-06-13T16:00:00Z", estadio: "AT&T Stadium", ciudad: "Dallas", homeSlug: "alemania", awaySlug: "curazao" },
  { id: "E2", grupo: "E", jornada: 1, fecha: "2026-06-13T19:00:00Z", estadio: "NRG Stadium", ciudad: "Houston", homeSlug: "costa-de-marfil", awaySlug: "ecuador" },
  // Jornada 2 — 18 jun
  { id: "E3", grupo: "E", jornada: 2, fecha: "2026-06-18T16:00:00Z", estadio: "MetLife Stadium", ciudad: "Nueva York/Nueva Jersey", homeSlug: "alemania", awaySlug: "costa-de-marfil" },
  { id: "E4", grupo: "E", jornada: 2, fecha: "2026-06-18T19:00:00Z", estadio: "Estadio BBVA", ciudad: "Monterrey", homeSlug: "curazao", awaySlug: "ecuador" },
  // Jornada 3 — 26 jun (simultáneos)
  { id: "E5", grupo: "E", jornada: 3, fecha: "2026-06-26T16:00:00Z", estadio: "Gillette Stadium", ciudad: "Boston", homeSlug: "alemania", awaySlug: "ecuador" },
  { id: "E6", grupo: "E", jornada: 3, fecha: "2026-06-26T16:00:00Z", estadio: "Estadio BBVA", ciudad: "Monterrey", homeSlug: "costa-de-marfil", awaySlug: "curazao" },

  // =============================================
  // GRUPO F: paises-bajos, japon, tunez, suecia
  // =============================================
  // Jornada 1 — 13 jun
  { id: "F1", grupo: "F", jornada: 1, fecha: "2026-06-13T13:00:00Z", estadio: "Levi's Stadium", ciudad: "San Francisco", homeSlug: "paises-bajos", awaySlug: "japon" },
  { id: "F2", grupo: "F", jornada: 1, fecha: "2026-06-13T22:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "tunez", awaySlug: "suecia" },
  // Jornada 2 — 18 jun
  { id: "F3", grupo: "F", jornada: 2, fecha: "2026-06-18T13:00:00Z", estadio: "SoFi Stadium", ciudad: "Los Ángeles", homeSlug: "paises-bajos", awaySlug: "tunez" },
  { id: "F4", grupo: "F", jornada: 2, fecha: "2026-06-18T22:00:00Z", estadio: "Lumen Field", ciudad: "Seattle", homeSlug: "japon", awaySlug: "suecia" },
  // Jornada 3 — 26 jun (simultáneos)
  { id: "F5", grupo: "F", jornada: 3, fecha: "2026-06-26T19:00:00Z", estadio: "Levi's Stadium", ciudad: "San Francisco", homeSlug: "paises-bajos", awaySlug: "suecia" },
  { id: "F6", grupo: "F", jornada: 3, fecha: "2026-06-26T19:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "japon", awaySlug: "tunez" },

  // =============================================
  // GRUPO G: belgica, egipto, iran, nueva-zelanda
  // =============================================
  // Jornada 1 — 14 jun
  { id: "G1", grupo: "G", jornada: 1, fecha: "2026-06-14T16:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "belgica", awaySlug: "egipto" },
  { id: "G2", grupo: "G", jornada: 1, fecha: "2026-06-14T19:00:00Z", estadio: "BC Place", ciudad: "Vancouver", homeSlug: "iran", awaySlug: "nueva-zelanda" },
  // Jornada 2 — 19 jun
  { id: "G3", grupo: "G", jornada: 2, fecha: "2026-06-19T16:00:00Z", estadio: "Arrowhead Stadium", ciudad: "Kansas City", homeSlug: "belgica", awaySlug: "iran" },
  { id: "G4", grupo: "G", jornada: 2, fecha: "2026-06-19T19:00:00Z", estadio: "Estadio Akron", ciudad: "Guadalajara", homeSlug: "egipto", awaySlug: "nueva-zelanda" },
  // Jornada 3 — 27 jun (simultáneos)
  { id: "G5", grupo: "G", jornada: 3, fecha: "2026-06-27T16:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "belgica", awaySlug: "nueva-zelanda" },
  { id: "G6", grupo: "G", jornada: 3, fecha: "2026-06-27T16:00:00Z", estadio: "BC Place", ciudad: "Vancouver", homeSlug: "egipto", awaySlug: "iran" },

  // =============================================
  // GRUPO H: espana, cabo-verde, arabia-saudi, uruguay
  // =============================================
  // Jornada 1 — 14 jun
  { id: "H1", grupo: "H", jornada: 1, fecha: "2026-06-14T13:00:00Z", estadio: "Mercedes-Benz Stadium", ciudad: "Atlanta", homeSlug: "espana", awaySlug: "cabo-verde" },
  { id: "H2", grupo: "H", jornada: 1, fecha: "2026-06-14T22:00:00Z", estadio: "Estadio Akron", ciudad: "Guadalajara", homeSlug: "arabia-saudi", awaySlug: "uruguay" },
  // Jornada 2 — 19 jun
  { id: "H3", grupo: "H", jornada: 2, fecha: "2026-06-19T13:00:00Z", estadio: "AT&T Stadium", ciudad: "Dallas", homeSlug: "espana", awaySlug: "arabia-saudi" },
  { id: "H4", grupo: "H", jornada: 2, fecha: "2026-06-19T22:00:00Z", estadio: "Estadio BBVA", ciudad: "Monterrey", homeSlug: "cabo-verde", awaySlug: "uruguay" },
  // Jornada 3 — 27 jun (simultáneos)
  { id: "H5", grupo: "H", jornada: 3, fecha: "2026-06-27T19:00:00Z", estadio: "Mercedes-Benz Stadium", ciudad: "Atlanta", homeSlug: "espana", awaySlug: "uruguay" },
  { id: "H6", grupo: "H", jornada: 3, fecha: "2026-06-27T19:00:00Z", estadio: "Estadio Akron", ciudad: "Guadalajara", homeSlug: "cabo-verde", awaySlug: "arabia-saudi" },

  // =============================================
  // GRUPO I: francia, senegal, noruega, irak
  // =============================================
  // Jornada 1 — 12 jun
  { id: "I1", grupo: "I", jornada: 1, fecha: "2026-06-12T19:00:00Z", estadio: "Gillette Stadium", ciudad: "Boston", homeSlug: "francia", awaySlug: "senegal" },
  { id: "I2", grupo: "I", jornada: 1, fecha: "2026-06-12T22:00:00Z", estadio: "Arrowhead Stadium", ciudad: "Kansas City", homeSlug: "noruega", awaySlug: "irak" },
  // Jornada 2 — 17 jun
  { id: "I3", grupo: "I", jornada: 2, fecha: "2026-06-17T16:00:00Z", estadio: "SoFi Stadium", ciudad: "Los Ángeles", homeSlug: "francia", awaySlug: "noruega" },
  { id: "I4", grupo: "I", jornada: 2, fecha: "2026-06-17T19:00:00Z", estadio: "BMO Field", ciudad: "Toronto", homeSlug: "senegal", awaySlug: "irak" },
  // Jornada 3 — 25 jun (simultáneos)
  { id: "I5", grupo: "I", jornada: 3, fecha: "2026-06-25T16:00:00Z", estadio: "Gillette Stadium", ciudad: "Boston", homeSlug: "francia", awaySlug: "irak" },
  { id: "I6", grupo: "I", jornada: 3, fecha: "2026-06-25T16:00:00Z", estadio: "Lumen Field", ciudad: "Seattle", homeSlug: "senegal", awaySlug: "noruega" },

  // =============================================
  // GRUPO J: argentina, argelia, austria, jordania
  // =============================================
  // Jornada 1 — 13 jun
  { id: "J1", grupo: "J", jornada: 1, fecha: "2026-06-13T19:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "argentina", awaySlug: "argelia" },
  { id: "J2", grupo: "J", jornada: 1, fecha: "2026-06-13T16:00:00Z", estadio: "Mercedes-Benz Stadium", ciudad: "Atlanta", homeSlug: "austria", awaySlug: "jordania" },
  // Jornada 2 — 18 jun
  { id: "J3", grupo: "J", jornada: 2, fecha: "2026-06-18T19:00:00Z", estadio: "NRG Stadium", ciudad: "Houston", homeSlug: "argentina", awaySlug: "austria" },
  { id: "J4", grupo: "J", jornada: 2, fecha: "2026-06-18T16:00:00Z", estadio: "Lumen Field", ciudad: "Seattle", homeSlug: "argelia", awaySlug: "jordania" },
  // Jornada 3 — 26 jun (simultáneos)
  { id: "J5", grupo: "J", jornada: 3, fecha: "2026-06-26T22:00:00Z", estadio: "Hard Rock Stadium", ciudad: "Miami", homeSlug: "argentina", awaySlug: "jordania" },
  { id: "J6", grupo: "J", jornada: 3, fecha: "2026-06-26T22:00:00Z", estadio: "NRG Stadium", ciudad: "Houston", homeSlug: "argelia", awaySlug: "austria" },

  // =============================================
  // GRUPO K: portugal, colombia, uzbekistan, rd-congo
  // =============================================
  // Jornada 1 — 11 jun
  { id: "K1", grupo: "K", jornada: 1, fecha: "2026-06-11T16:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "portugal", awaySlug: "colombia" },
  { id: "K2", grupo: "K", jornada: 1, fecha: "2026-06-11T13:00:00Z", estadio: "Lumen Field", ciudad: "Seattle", homeSlug: "uzbekistan", awaySlug: "rd-congo" },
  // Jornada 2 — 16 jun
  { id: "K3", grupo: "K", jornada: 2, fecha: "2026-06-16T19:00:00Z", estadio: "SoFi Stadium", ciudad: "Los Ángeles", homeSlug: "portugal", awaySlug: "uzbekistan" },
  { id: "K4", grupo: "K", jornada: 2, fecha: "2026-06-16T22:00:00Z", estadio: "Arrowhead Stadium", ciudad: "Kansas City", homeSlug: "colombia", awaySlug: "rd-congo" },
  // Jornada 3 — 24 jun (simultáneos)
  { id: "K5", grupo: "K", jornada: 3, fecha: "2026-06-24T22:00:00Z", estadio: "Lincoln Financial Field", ciudad: "Filadelfia", homeSlug: "portugal", awaySlug: "rd-congo" },
  { id: "K6", grupo: "K", jornada: 3, fecha: "2026-06-24T22:00:00Z", estadio: "Levi's Stadium", ciudad: "San Francisco", homeSlug: "colombia", awaySlug: "uzbekistan" },

  // =============================================
  // GRUPO L: inglaterra, croacia, ghana, panama
  // =============================================
  // Jornada 1 — 14 jun
  { id: "L1", grupo: "L", jornada: 1, fecha: "2026-06-14T19:00:00Z", estadio: "Levi's Stadium", ciudad: "San Francisco", homeSlug: "inglaterra", awaySlug: "croacia" },
  { id: "L2", grupo: "L", jornada: 1, fecha: "2026-06-14T16:00:00Z", estadio: "Estadio BBVA", ciudad: "Monterrey", homeSlug: "ghana", awaySlug: "panama" },
  // Jornada 2 — 20 jun
  { id: "L3", grupo: "L", jornada: 2, fecha: "2026-06-20T16:00:00Z", estadio: "MetLife Stadium", ciudad: "Nueva York/Nueva Jersey", homeSlug: "inglaterra", awaySlug: "ghana" },
  { id: "L4", grupo: "L", jornada: 2, fecha: "2026-06-20T19:00:00Z", estadio: "Estadio Azteca", ciudad: "Ciudad de México", homeSlug: "croacia", awaySlug: "panama" },
  // Jornada 3 — 28 jun (simultáneos)
  { id: "L5", grupo: "L", jornada: 3, fecha: "2026-06-28T19:00:00Z", estadio: "MetLife Stadium", ciudad: "Nueva York/Nueva Jersey", homeSlug: "inglaterra", awaySlug: "panama" },
  { id: "L6", grupo: "L", jornada: 3, fecha: "2026-06-28T19:00:00Z", estadio: "Estadio Azteca", ciudad: "Ciudad de México", homeSlug: "croacia", awaySlug: "ghana" },
];

/**
 * Devuelve los partidos de un grupo específico.
 */
export function getPartidosByGrupo(grupo: string): Partido[] {
  return CALENDARIO.filter((p) => p.grupo === grupo.toUpperCase());
}

/**
 * Devuelve los partidos de una jornada específica dentro de un grupo.
 */
export function getPartidosByJornada(grupo: string, jornada: number): Partido[] {
  return CALENDARIO.filter(
    (p) => p.grupo === grupo.toUpperCase() && p.jornada === jornada,
  );
}

/**
 * Devuelve todos los partidos de una fecha concreta (formato "YYYY-MM-DD").
 */
export function getPartidosByFecha(fecha: string): Partido[] {
  return CALENDARIO.filter((p) => p.fecha.startsWith(fecha));
}

/**
 * Devuelve todos los partidos en los que participa una selección (por slug).
 */
export function getPartidosByEquipo(slug: string): Partido[] {
  return CALENDARIO.filter(
    (p) => p.homeSlug === slug || p.awaySlug === slug,
  );
}

export function getPartidosByEstadio(estadio: string): Partido[] {
  return CALENDARIO.filter(
    (p) => p.estadio.toLowerCase().includes(estadio.toLowerCase()),
  );
}

export function getPartidosByCiudad(ciudad: string): Partido[] {
  return CALENDARIO.filter(
    (p) => p.ciudad.toLowerCase().includes(ciudad.toLowerCase()),
  );
}
