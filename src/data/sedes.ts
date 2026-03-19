// src/data/sedes.ts
// Datos de las 16 sedes del Mundial 2026

export interface Sede {
  slug: string;
  nombre: string;
  estadio: string;
  capacidad: number;
  pais: 'Estados Unidos' | 'México' | 'Canadá';
  totalPartidos: number;
  fasesQueAlberga: string[];
  techoCerrado: boolean;
  clima: {
    tempMedia: string;
    descripcion: string;
  };
  partidosDestacados: string[];
}

export const SEDES: Sede[] = [
  // Estados Unidos (11 sedes)
  {
    slug: 'nueva-york',
    nombre: 'Nueva York / Nueva Jersey',
    estadio: 'MetLife Stadium',
    capacidad: 82500,
    pais: 'Estados Unidos',
    totalPartidos: 8,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Semifinal', 'FINAL'],
    techoCerrado: false,
    clima: { tempMedia: '22°C', descripcion: 'Húmedo subtropical' },
    partidosDestacados: ['Final: 19 julio 2026'],
  },
  {
    slug: 'los-angeles',
    nombre: 'Los Ángeles',
    estadio: 'SoFi Stadium',
    capacidad: 70240,
    pais: 'Estados Unidos',
    totalPartidos: 8,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Semifinal'],
    techoCerrado: true,
    clima: { tempMedia: '24°C', descripcion: 'Mediterráneo' },
    partidosDestacados: ['Semifinal'],
  },
  {
    slug: 'miami',
    nombre: 'Miami',
    estadio: 'Hard Rock Stadium',
    capacidad: 64767,
    pais: 'Estados Unidos',
    totalPartidos: 7,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', '3er puesto'],
    techoCerrado: false,
    clima: { tempMedia: '29°C', descripcion: 'Tropical húmedo' },
    partidosDestacados: ['3er y 4to puesto'],
  },
  {
    slug: 'dallas',
    nombre: 'Dallas',
    estadio: 'AT&T Stadium',
    capacidad: 80000,
    pais: 'Estados Unidos',
    totalPartidos: 9,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Cuartos'],
    techoCerrado: true,
    clima: { tempMedia: '32°C', descripcion: 'Subtropical húmedo' },
    partidosDestacados: ['9 partidos (más del torneo)'],
  },
  {
    slug: 'san-francisco',
    nombre: 'San Francisco Bay Area',
    estadio: "Levi's Stadium",
    capacidad: 68500,
    pais: 'Estados Unidos',
    totalPartidos: 6,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '20°C', descripcion: 'Mediterráneo' },
    partidosDestacados: [],
  },
  {
    slug: 'seattle',
    nombre: 'Seattle',
    estadio: 'Lumen Field',
    capacidad: 69000,
    pais: 'Estados Unidos',
    totalPartidos: 6,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '18°C', descripcion: 'Oceánico' },
    partidosDestacados: [],
  },
  {
    slug: 'atlanta',
    nombre: 'Atlanta',
    estadio: 'Mercedes-Benz Stadium',
    capacidad: 71000,
    pais: 'Estados Unidos',
    totalPartidos: 8,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Cuartos'],
    techoCerrado: true,
    clima: { tempMedia: '28°C', descripcion: 'Subtropical húmedo' },
    partidosDestacados: [],
  },
  {
    slug: 'houston',
    nombre: 'Houston',
    estadio: 'NRG Stadium',
    capacidad: 72220,
    pais: 'Estados Unidos',
    totalPartidos: 7,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Cuartos'],
    techoCerrado: true,
    clima: { tempMedia: '31°C', descripcion: 'Subtropical húmedo' },
    partidosDestacados: [],
  },
  {
    slug: 'filadelfia',
    nombre: 'Filadelfia',
    estadio: 'Lincoln Financial Field',
    capacidad: 69796,
    pais: 'Estados Unidos',
    totalPartidos: 6,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '26°C', descripcion: 'Continental húmedo' },
    partidosDestacados: [],
  },
  {
    slug: 'boston',
    nombre: 'Boston',
    estadio: 'Gillette Stadium',
    capacidad: 65878,
    pais: 'Estados Unidos',
    totalPartidos: 7,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '24°C', descripcion: 'Continental húmedo' },
    partidosDestacados: ['Inauguración grupo'],
  },
  {
    slug: 'kansas-city',
    nombre: 'Kansas City',
    estadio: 'Arrowhead Stadium',
    capacidad: 76416,
    pais: 'Estados Unidos',
    totalPartidos: 6,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '27°C', descripcion: 'Continental húmedo' },
    partidosDestacados: [],
  },

  // México (3 sedes)
  {
    slug: 'ciudad-de-mexico',
    nombre: 'Ciudad de México',
    estadio: 'Estadio Azteca',
    capacidad: 87523,
    pais: 'México',
    totalPartidos: 5,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '19°C', descripcion: 'Subtropical de altura' },
    partidosDestacados: ['Inauguración: 11 junio'],
  },
  {
    slug: 'guadalajara',
    nombre: 'Guadalajara',
    estadio: 'Estadio Akron',
    capacidad: 46609,
    pais: 'México',
    totalPartidos: 4,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '26°C', descripcion: 'Semiárido cálido' },
    partidosDestacados: [],
  },
  {
    slug: 'monterrey',
    nombre: 'Monterrey',
    estadio: 'Estadio BBVA',
    capacidad: 53500,
    pais: 'México',
    totalPartidos: 4,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '33°C', descripcion: 'Semiárido cálido' },
    partidosDestacados: [],
  },

  // Canadá (2 sedes)
  {
    slug: 'toronto',
    nombre: 'Toronto',
    estadio: 'BMO Field',
    capacidad: 45000,
    pais: 'Canadá',
    totalPartidos: 6,
    fasesQueAlberga: ['Fase de grupos', 'Octavos'],
    techoCerrado: false,
    clima: { tempMedia: '22°C', descripcion: 'Continental húmedo' },
    partidosDestacados: ['Mundial histórico para Canadá'],
  },
  {
    slug: 'vancouver',
    nombre: 'Vancouver',
    estadio: 'BC Place',
    capacidad: 54500,
    pais: 'Canadá',
    totalPartidos: 7,
    fasesQueAlberga: ['Fase de grupos', 'Octavos', 'Cuartos'],
    techoCerrado: true,
    clima: { tempMedia: '18°C', descripcion: 'Oceánico' },
    partidosDestacados: ['Cuartos de final'],
  },
];

export function getSedesByPais(pais: 'Estados Unidos' | 'México' | 'Canadá'): Sede[] {
  return SEDES.filter(s => s.pais === pais);
}

export function getSedeBySlug(slug: string): Sede | undefined {
  return SEDES.find(s => s.slug === slug);
}

export function getAllSedeSlugs(): string[] {
  return SEDES.map(s => s.slug);
}
