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
  confederacion: string;
}

export const SELECCIONES: Seleccion[] = [
  // Grupo A
  { slug: 'mexico', nombre: 'México', emoji: '🇲🇽', grupo: 'A', esAnfitrion: true, rankingFIFA: 14, mundiales: 17, confederacion: 'CONCACAF' },
  { slug: 'corea-del-sur', nombre: 'Corea del Sur', emoji: '🇰🇷', grupo: 'A', rankingFIFA: 23, mundiales: 11, confederacion: 'AFC' },
  { slug: 'sudafrica', nombre: 'Sudáfrica', emoji: '🇿🇦', grupo: 'A', rankingFIFA: 66, mundiales: 3, confederacion: 'CAF' },
  { slug: 'por-definir-a', nombre: 'Por definir', emoji: '❓', grupo: 'A', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  
  // Grupo B
  { slug: 'canada', nombre: 'Canadá', emoji: '🇨🇦', grupo: 'B', esAnfitrion: true, rankingFIFA: 48, mundiales: 2, confederacion: 'CONCACAF' },
  { slug: 'por-definir-b', nombre: 'Por definir', emoji: '❓', grupo: 'B', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  { slug: 'qatar', nombre: 'Qatar', emoji: '🇶🇦', grupo: 'B', rankingFIFA: 58, mundiales: 1, confederacion: 'AFC' },
  { slug: 'suiza', nombre: 'Suiza', emoji: '🇨🇭', grupo: 'B', rankingFIFA: 19, mundiales: 12, confederacion: 'UEFA' },
  
  // Grupo C
  { slug: 'brasil', nombre: 'Brasil', emoji: '🇧🇷', grupo: 'C', rankingFIFA: 5, mundiales: 22, confederacion: 'CONMEBOL' },
  { slug: 'marruecos', nombre: 'Marruecos', emoji: '🇲🇦', grupo: 'C', rankingFIFA: 13, mundiales: 6, confederacion: 'CAF' },
  { slug: 'haiti', nombre: 'Haití', emoji: '🇭🇹', grupo: 'C', rankingFIFA: 89, mundiales: 1, confederacion: 'CONCACAF' },
  { slug: 'escocia', nombre: 'Escocia', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grupo: 'C', rankingFIFA: 44, mundiales: 8, confederacion: 'UEFA' },
  
  // Grupo D
  { slug: 'estados-unidos', nombre: 'EE.UU.', emoji: '🇺🇸', grupo: 'D', esAnfitrion: true, rankingFIFA: 11, mundiales: 11, confederacion: 'CONCACAF' },
  { slug: 'paraguay', nombre: 'Paraguay', emoji: '🇵🇾', grupo: 'D', rankingFIFA: 53, mundiales: 8, confederacion: 'CONMEBOL' },
  { slug: 'australia', nombre: 'Australia', emoji: '🇦🇺', grupo: 'D', rankingFIFA: 25, mundiales: 6, confederacion: 'AFC' },
  { slug: 'por-definir-d', nombre: 'Por definir', emoji: '❓', grupo: 'D', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  
  // Grupo E
  { slug: 'alemania', nombre: 'Alemania', emoji: '🇩🇪', grupo: 'E', rankingFIFA: 16, mundiales: 20, confederacion: 'UEFA' },
  { slug: 'curazao', nombre: 'Curazao', emoji: '🇨🇼', grupo: 'E', rankingFIFA: 86, mundiales: 0, confederacion: 'CONCACAF' },
  { slug: 'costa-de-marfil', nombre: 'C. de Marfil', emoji: '🇨🇮', grupo: 'E', rankingFIFA: 39, mundiales: 3, confederacion: 'CAF' },
  { slug: 'ecuador', nombre: 'Ecuador', emoji: '🇪🇨', grupo: 'E', rankingFIFA: 31, mundiales: 4, confederacion: 'CONMEBOL' },
  
  // Grupo F
  { slug: 'paises-bajos', nombre: 'P. Bajos', emoji: '🇳🇱', grupo: 'F', rankingFIFA: 7, mundiales: 11, confederacion: 'UEFA' },
  { slug: 'japon', nombre: 'Japón', emoji: '🇯🇵', grupo: 'F', rankingFIFA: 18, mundiales: 7, confederacion: 'AFC' },
  { slug: 'por-definir-f', nombre: 'Por definir', emoji: '❓', grupo: 'F', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  { slug: 'tunez', nombre: 'Túnez', emoji: '🇹🇳', grupo: 'F', rankingFIFA: 41, mundiales: 6, confederacion: 'CAF' },
  
  // Grupo G
  { slug: 'belgica', nombre: 'Bélgica', emoji: '🇧🇪', grupo: 'G', rankingFIFA: 4, mundiales: 14, confederacion: 'UEFA' },
  { slug: 'egipto', nombre: 'Egipto', emoji: '🇪🇬', grupo: 'G', rankingFIFA: 36, mundiales: 3, confederacion: 'CAF' },
  { slug: 'iran', nombre: 'Irán', emoji: '🇮🇷', grupo: 'G', rankingFIFA: 20, mundiales: 6, confederacion: 'AFC' },
  { slug: 'nueva-zelanda', nombre: 'N. Zelanda', emoji: '🇳🇿', grupo: 'G', rankingFIFA: 104, mundiales: 2, confederacion: 'OFC' },
  
  // Grupo H
  { slug: 'espana', nombre: 'España', emoji: '🇪🇸', grupo: 'H', rankingFIFA: 8, mundiales: 16, confederacion: 'UEFA' },
  { slug: 'cabo-verde', nombre: 'Cabo Verde', emoji: '🇨🇻', grupo: 'H', rankingFIFA: 65, mundiales: 0, confederacion: 'CAF' },
  { slug: 'arabia-saudi', nombre: 'A. Saudí', emoji: '🇸🇦', grupo: 'H', rankingFIFA: 56, mundiales: 6, confederacion: 'AFC' },
  { slug: 'uruguay', nombre: 'Uruguay', emoji: '🇺🇾', grupo: 'H', rankingFIFA: 15, mundiales: 14, confederacion: 'CONMEBOL' },
  
  // Grupo I
  { slug: 'francia', nombre: 'Francia', emoji: '🇫🇷', grupo: 'I', rankingFIFA: 2, mundiales: 16, confederacion: 'UEFA' },
  { slug: 'senegal', nombre: 'Senegal', emoji: '🇸🇳', grupo: 'I', rankingFIFA: 17, mundiales: 3, confederacion: 'CAF' },
  { slug: 'por-definir-i', nombre: 'Por definir', emoji: '❓', grupo: 'I', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  { slug: 'noruega', nombre: 'Noruega', emoji: '🇳🇴', grupo: 'I', rankingFIFA: 43, mundiales: 3, confederacion: 'UEFA' },
  
  // Grupo J
  { slug: 'argentina', nombre: 'Argentina', emoji: '🇦🇷', grupo: 'J', rankingFIFA: 1, mundiales: 18, confederacion: 'CONMEBOL' },
  { slug: 'argelia', nombre: 'Argelia', emoji: '🇩🇿', grupo: 'J', rankingFIFA: 33, mundiales: 4, confederacion: 'CAF' },
  { slug: 'austria', nombre: 'Austria', emoji: '🇦🇹', grupo: 'J', rankingFIFA: 24, mundiales: 7, confederacion: 'UEFA' },
  { slug: 'jordania', nombre: 'Jordania', emoji: '🇯🇴', grupo: 'J', rankingFIFA: 70, mundiales: 0, confederacion: 'AFC' },
  
  // Grupo K
  { slug: 'portugal', nombre: 'Portugal', emoji: '🇵🇹', grupo: 'K', rankingFIFA: 6, mundiales: 8, confederacion: 'UEFA' },
  { slug: 'por-definir-k', nombre: 'Por definir', emoji: '❓', grupo: 'K', esPlayoff: true, rankingFIFA: undefined, mundiales: 0, confederacion: 'TBD' },
  { slug: 'uzbekistan', nombre: 'Uzbekistán', emoji: '🇺🇿', grupo: 'K', rankingFIFA: 61, mundiales: 0, confederacion: 'AFC' },
  { slug: 'colombia', nombre: 'Colombia', emoji: '🇨🇴', grupo: 'K', rankingFIFA: 12, mundiales: 6, confederacion: 'CONMEBOL' },
  
  // Grupo L
  { slug: 'inglaterra', nombre: 'Inglaterra', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grupo: 'L', rankingFIFA: 3, mundiales: 16, confederacion: 'UEFA' },
  { slug: 'croacia', nombre: 'Croacia', emoji: '🇭🇷', grupo: 'L', rankingFIFA: 10, mundiales: 6, confederacion: 'UEFA' },
  { slug: 'ghana', nombre: 'Ghana', emoji: '🇬🇭', grupo: 'L', rankingFIFA: 67, mundiales: 4, confederacion: 'CAF' },
  { slug: 'panama', nombre: 'Panamá', emoji: '🇵🇦', grupo: 'L', rankingFIFA: 38, mundiales: 1, confederacion: 'CONCACAF' },
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
