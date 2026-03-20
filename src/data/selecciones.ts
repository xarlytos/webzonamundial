// src/data/selecciones.ts
// Datos de las 48 selecciones del Mundial 2026

export interface Seleccion {
  slug: string;
  nombre: string;
  emoji: string;
  grupo: string;
  esAnfitrion?: boolean;
  esPlayoff?: boolean;
  rankingFIFA?: number;
  mundiales: number;
  mejorResultado: string;
  confederacion: string;
  flagCode: string; // Código de bandera para flagcdn.com
}

export const SELECCIONES: Seleccion[] = [
  // Grupo A
  { slug: 'mexico', nombre: 'México', emoji: '🇲🇽', grupo: 'A', esAnfitrion: true, rankingFIFA: 14, mundiales: 17, mejorResultado: 'Cuartos de final', confederacion: 'CONCACAF', flagCode: 'mx' },
  { slug: 'corea-del-sur', nombre: 'Corea del Sur', emoji: '🇰🇷', grupo: 'A', rankingFIFA: 23, mundiales: 11, mejorResultado: 'Semifinales', confederacion: 'AFC', flagCode: 'kr' },
  { slug: 'sudafrica', nombre: 'Sudáfrica', emoji: '🇿🇦', grupo: 'A', rankingFIFA: 66, mundiales: 3, mejorResultado: 'Fase de grupos', confederacion: 'CAF', flagCode: 'za' },
  { slug: 'por-definir-a', nombre: 'Por definir', emoji: '❓', grupo: 'A', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  
  // Grupo B
  { slug: 'canada', nombre: 'Canadá', emoji: '🇨🇦', grupo: 'B', esAnfitrion: true, rankingFIFA: 48, mundiales: 2, mejorResultado: 'Fase de grupos', confederacion: 'CONCACAF', flagCode: 'ca' },
  { slug: 'por-definir-b', nombre: 'Por definir', emoji: '❓', grupo: 'B', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  { slug: 'qatar', nombre: 'Qatar', emoji: '🇶🇦', grupo: 'B', rankingFIFA: 58, mundiales: 1, mejorResultado: 'Fase de grupos', confederacion: 'AFC', flagCode: 'qa' },
  { slug: 'suiza', nombre: 'Suiza', emoji: '🇨🇭', grupo: 'B', rankingFIFA: 19, mundiales: 12, mejorResultado: 'Cuartos de final', confederacion: 'UEFA', flagCode: 'ch' },
  
  // Grupo C
  { slug: 'brasil', nombre: 'Brasil', emoji: '🇧🇷', grupo: 'C', rankingFIFA: 5, mundiales: 22, mejorResultado: 'Campeón (5)', confederacion: 'CONMEBOL', flagCode: 'br' },
  { slug: 'marruecos', nombre: 'Marruecos', emoji: '🇲🇦', grupo: 'C', rankingFIFA: 13, mundiales: 6, mejorResultado: 'Semifinales', confederacion: 'CAF', flagCode: 'ma' },
  { slug: 'haiti', nombre: 'Haití', emoji: '🇭🇹', grupo: 'C', rankingFIFA: 89, mundiales: 1, mejorResultado: 'Fase de grupos', confederacion: 'CONCACAF', flagCode: 'ht' },
  { slug: 'escocia', nombre: 'Escocia', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grupo: 'C', rankingFIFA: 44, mundiales: 8, mejorResultado: 'Fase de grupos', confederacion: 'UEFA', flagCode: 'gb-sct' },
  
  // Grupo D
  { slug: 'estados-unidos', nombre: 'EE.UU.', emoji: '🇺🇸', grupo: 'D', esAnfitrion: true, rankingFIFA: 11, mundiales: 11, mejorResultado: 'Semifinales', confederacion: 'CONCACAF', flagCode: 'us' },
  { slug: 'paraguay', nombre: 'Paraguay', emoji: '🇵🇾', grupo: 'D', rankingFIFA: 53, mundiales: 8, mejorResultado: 'Cuartos de final', confederacion: 'CONMEBOL', flagCode: 'py' },
  { slug: 'australia', nombre: 'Australia', emoji: '🇦🇺', grupo: 'D', rankingFIFA: 25, mundiales: 6, mejorResultado: 'Octavos de final', confederacion: 'AFC', flagCode: 'au' },
  { slug: 'por-definir-d', nombre: 'Por definir', emoji: '❓', grupo: 'D', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  
  // Grupo E
  { slug: 'alemania', nombre: 'Alemania', emoji: '🇩🇪', grupo: 'E', rankingFIFA: 16, mundiales: 20, mejorResultado: 'Campeón (4)', confederacion: 'UEFA', flagCode: 'de' },
  { slug: 'curazao', nombre: 'Curazao', emoji: '🇨🇼', grupo: 'E', rankingFIFA: 86, mundiales: 0, mejorResultado: 'Debutante', confederacion: 'CONCACAF', flagCode: 'cw' },
  { slug: 'costa-de-marfil', nombre: 'C. de Marfil', emoji: '🇨🇮', grupo: 'E', rankingFIFA: 39, mundiales: 3, mejorResultado: 'Fase de grupos', confederacion: 'CAF', flagCode: 'ci' },
  { slug: 'ecuador', nombre: 'Ecuador', emoji: '🇪🇨', grupo: 'E', rankingFIFA: 31, mundiales: 4, mejorResultado: 'Octavos de final', confederacion: 'CONMEBOL', flagCode: 'ec' },
  
  // Grupo F
  { slug: 'paises-bajos', nombre: 'P. Bajos', emoji: '🇳🇱', grupo: 'F', rankingFIFA: 7, mundiales: 11, mejorResultado: 'Subcampeón', confederacion: 'UEFA', flagCode: 'nl' },
  { slug: 'japon', nombre: 'Japón', emoji: '🇯🇵', grupo: 'F', rankingFIFA: 18, mundiales: 7, mejorResultado: 'Octavos de final', confederacion: 'AFC', flagCode: 'jp' },
  { slug: 'por-definir-f', nombre: 'Por definir', emoji: '❓', grupo: 'F', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  { slug: 'tunez', nombre: 'Túnez', emoji: '🇹🇳', grupo: 'F', rankingFIFA: 41, mundiales: 6, mejorResultado: 'Fase de grupos', confederacion: 'CAF', flagCode: 'tn' },
  
  // Grupo G
  { slug: 'belgica', nombre: 'Bélgica', emoji: '🇧🇪', grupo: 'G', rankingFIFA: 4, mundiales: 14, mejorResultado: 'Tercero', confederacion: 'UEFA', flagCode: 'be' },
  { slug: 'egipto', nombre: 'Egipto', emoji: '🇪🇬', grupo: 'G', rankingFIFA: 36, mundiales: 3, mejorResultado: 'Fase de grupos', confederacion: 'CAF', flagCode: 'eg' },
  { slug: 'iran', nombre: 'Irán', emoji: '🇮🇷', grupo: 'G', rankingFIFA: 20, mundiales: 6, mejorResultado: 'Fase de grupos', confederacion: 'AFC', flagCode: 'ir' },
  { slug: 'nueva-zelanda', nombre: 'N. Zelanda', emoji: '🇳🇿', grupo: 'G', rankingFIFA: 104, mundiales: 2, mejorResultado: 'Fase de grupos', confederacion: 'OFC', flagCode: 'nz' },
  
  // Grupo H
  { slug: 'espana', nombre: 'España', emoji: '🇪🇸', grupo: 'H', rankingFIFA: 8, mundiales: 16, mejorResultado: 'Campeón (1)', confederacion: 'UEFA', flagCode: 'es' },
  { slug: 'cabo-verde', nombre: 'Cabo Verde', emoji: '🇨🇻', grupo: 'H', rankingFIFA: 65, mundiales: 0, mejorResultado: 'Debutante', confederacion: 'CAF', flagCode: 'cv' },
  { slug: 'arabia-saudi', nombre: 'A. Saudí', emoji: '🇸🇦', grupo: 'H', rankingFIFA: 56, mundiales: 6, mejorResultado: 'Octavos de final', confederacion: 'AFC', flagCode: 'sa' },
  { slug: 'uruguay', nombre: 'Uruguay', emoji: '🇺🇾', grupo: 'H', rankingFIFA: 15, mundiales: 14, mejorResultado: 'Campeón (2)', confederacion: 'CONMEBOL', flagCode: 'uy' },
  
  // Grupo I
  { slug: 'francia', nombre: 'Francia', emoji: '🇫🇷', grupo: 'I', rankingFIFA: 2, mundiales: 16, mejorResultado: 'Campeón (2)', confederacion: 'UEFA', flagCode: 'fr' },
  { slug: 'senegal', nombre: 'Senegal', emoji: '🇸🇳', grupo: 'I', rankingFIFA: 17, mundiales: 3, mejorResultado: 'Cuartos de final', confederacion: 'CAF', flagCode: 'sn' },
  { slug: 'por-definir-i', nombre: 'Por definir', emoji: '❓', grupo: 'I', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  { slug: 'noruega', nombre: 'Noruega', emoji: '🇳🇴', grupo: 'I', rankingFIFA: 43, mundiales: 3, mejorResultado: 'Octavos de final', confederacion: 'UEFA', flagCode: 'no' },
  
  // Grupo J
  { slug: 'argentina', nombre: 'Argentina', emoji: '🇦🇷', grupo: 'J', rankingFIFA: 1, mundiales: 18, mejorResultado: 'Campeón (3)', confederacion: 'CONMEBOL', flagCode: 'ar' },
  { slug: 'argelia', nombre: 'Argelia', emoji: '🇩🇿', grupo: 'J', rankingFIFA: 33, mundiales: 4, mejorResultado: 'Octavos de final', confederacion: 'CAF', flagCode: 'dz' },
  { slug: 'austria', nombre: 'Austria', emoji: '🇦🇹', grupo: 'J', rankingFIFA: 24, mundiales: 7, mejorResultado: 'Semifinales', confederacion: 'UEFA', flagCode: 'at' },
  { slug: 'jordania', nombre: 'Jordania', emoji: '🇯🇴', grupo: 'J', rankingFIFA: 70, mundiales: 0, mejorResultado: 'Debutante', confederacion: 'AFC', flagCode: 'jo' },
  
  // Grupo K
  { slug: 'portugal', nombre: 'Portugal', emoji: '🇵🇹', grupo: 'K', rankingFIFA: 6, mundiales: 8, mejorResultado: 'Semifinales', confederacion: 'UEFA', flagCode: 'pt' },
  { slug: 'por-definir-k', nombre: 'Por definir', emoji: '❓', grupo: 'K', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, mejorResultado: 'TBD', confederacion: 'TBD', flagCode: 'xx' },
  { slug: 'uzbekistan', nombre: 'Uzbekistán', emoji: '🇺🇿', grupo: 'K', rankingFIFA: 61, mundiales: 0, mejorResultado: 'Debutante', confederacion: 'AFC', flagCode: 'uz' },
  { slug: 'colombia', nombre: 'Colombia', emoji: '🇨🇴', grupo: 'K', rankingFIFA: 12, mundiales: 6, mejorResultado: 'Cuartos de final', confederacion: 'CONMEBOL', flagCode: 'co' },
  
  // Grupo L
  { slug: 'inglaterra', nombre: 'Inglaterra', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grupo: 'L', rankingFIFA: 3, mundiales: 16, mejorResultado: 'Campeón (1)', confederacion: 'UEFA', flagCode: 'gb-eng' },
  { slug: 'croacia', nombre: 'Croacia', emoji: '🇭🇷', grupo: 'L', rankingFIFA: 10, mundiales: 6, mejorResultado: 'Subcampeón', confederacion: 'UEFA', flagCode: 'hr' },
  { slug: 'ghana', nombre: 'Ghana', emoji: '🇬🇭', grupo: 'L', rankingFIFA: 67, mundiales: 4, mejorResultado: 'Cuartos de final', confederacion: 'CAF', flagCode: 'gh' },
  { slug: 'panama', nombre: 'Panamá', emoji: '🇵🇦', grupo: 'L', rankingFIFA: 38, mundiales: 1, mejorResultado: 'Fase de grupos', confederacion: 'CONCACAF', flagCode: 'pa' },
];

export const GRUPOS: Record<string, { nombre: string; letra: string }> = {
  'A': { nombre: 'Grupo A', letra: 'A' },
  'B': { nombre: 'Grupo B', letra: 'B' },
  'C': { nombre: 'Grupo C', letra: 'C' },
  'D': { nombre: 'Grupo D', letra: 'D' },
  'E': { nombre: 'Grupo E', letra: 'E' },
  'F': { nombre: 'Grupo F', letra: 'F' },
  'G': { nombre: 'Grupo G', letra: 'G' },
  'H': { nombre: 'Grupo H', letra: 'H' },
  'I': { nombre: 'Grupo I', letra: 'I' },
  'J': { nombre: 'Grupo J', letra: 'J' },
  'K': { nombre: 'Grupo K', letra: 'K' },
  'L': { nombre: 'Grupo L', letra: 'L' },
};

export function getSeleccionesByGrupo(grupo: string): Seleccion[] {
  return SELECCIONES.filter(s => s.grupo === grupo.toUpperCase());
}

export function getSeleccionBySlug(slug: string): Seleccion | undefined {
  return SELECCIONES.find(s => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return SELECCIONES.map(s => s.slug);
}
