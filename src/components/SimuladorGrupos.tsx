// src/components/SimuladorGrupos.tsx
// Simulador de grupos del Mundial 2026
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Match {
  id: string;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  played: boolean;
}

interface TeamStanding {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

const GROUPS: Record<string, string[]> = {
  'A': ['México', 'Corea del Sur', 'Sudáfrica', 'UEFA D'],
  'B': ['Canadá', 'Suiza', 'Catar', 'UEFA A'],
  'C': ['Brasil', 'Marruecos', 'Escocia', 'Haití'],
  'D': ['EE.UU.', 'Paraguay', 'Australia', 'AFC-CONMEBOL'],
  'E': ['Alemania', 'Costa de Marfil', 'Ecuador', 'Curazao'],
  'F': ['Países Bajos', 'Japón', 'Túnez', 'UEFA F'],
  'G': ['Bélgica', 'Egipto', 'Irán', 'Nueva Zelanda'],
  'H': ['España', 'Uruguay', 'Arabia Saudita', 'Cabo Verde'],
  'I': ['Francia', 'Senegal', 'Noruega', 'AFC-CONCACAF'],
  'J': ['Argentina', 'Argelia', 'Austria', 'Jordania'],
  'K': ['Portugal', 'Colombia', 'Uzbekistán', 'AFC-UEFA'],
  'L': ['Inglaterra', 'Croacia', 'Ghana', 'Panamá'],
};

function generateMatches(teams: string[]): Match[] {
  const matches: Match[] = [];
  let id = 1;
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push({
        id: `m${id++}`,
        home: teams[i],
        away: teams[j],
        homeScore: null,
        awayScore: null,
        played: false,
      });
    }
  }
  return matches;
}

function calculateStandings(teams: string[], matches: Match[]): TeamStanding[] {
  const standings: Record<string, TeamStanding> = {};
  
  teams.forEach(team => {
    standings[team] = {
      name: team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
    };
  });

  matches.forEach(match => {
    if (match.played && match.homeScore !== null && match.awayScore !== null) {
      const home = standings[match.home];
      const away = standings[match.away];
      
      home.played++;
      away.played++;
      home.gf += match.homeScore;
      home.ga += match.awayScore;
      away.gf += match.awayScore;
      away.ga += match.homeScore;
      
      if (match.homeScore > match.awayScore) {
        home.won++;
        home.points += 3;
        away.lost++;
      } else if (match.homeScore < match.awayScore) {
        away.won++;
        away.points += 3;
        home.lost++;
      } else {
        home.drawn++;
        away.drawn++;
        home.points += 1;
        away.points += 1;
      }
    }
  });

  return Object.values(standings).map(s => ({
    ...s,
    gd: s.gf - s.ga,
  })).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
}

export default function SimuladorGrupos({ initialGroup }: { initialGroup: string }) {
  const teams = GROUPS[initialGroup] || [];
  const [matches, setMatches] = useState<Match[]>(() => generateMatches(teams));
  const [activeTab, setActiveTab] = useState<'fixture' | 'table'>('fixture');

  const standings = calculateStandings(teams, matches);

  const updateScore = (matchId: string, homeScore: number | null, awayScore: number | null) => {
    setMatches(prev => prev.map(m => {
      if (m.id === matchId) {
        return {
          ...m,
          homeScore: homeScore === null ? null : Math.max(0, Math.min(99, homeScore)),
          awayScore: awayScore === null ? null : Math.max(0, Math.min(99, awayScore)),
          played: homeScore !== null && awayScore !== null,
        };
      }
      return m;
    }));
  };

  const resetSimulator = () => {
    setMatches(generateMatches(teams));
  };

  return (
    <div className="bg-[#0B1825] border border-[#1a2a3f] rounded-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#1a2a3f]">
        <button
          onClick={() => setActiveTab('fixture')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'fixture' 
              ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] bg-[#C9A84C08]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Partidos
        </button>
        <button
          onClick={() => setActiveTab('table')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'table' 
              ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] bg-[#C9A84C08]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Clasificación
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'fixture' ? (
          <div className="space-y-3">
            {matches.map((match, idx) => (
              <div 
                key={match.id} 
                className="flex items-center gap-3 p-3 bg-[#0F1D32] rounded-lg"
              >
                <span className="text-xs text-gray-500 w-6">J{Math.floor(idx / 2) + 1}</span>
                
                <div className="flex-1 text-right">
                  <span className="text-sm text-white font-medium">{match.home}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={match.homeScore ?? ''}
                    onChange={(e) => updateScore(match.id, e.target.value === '' ? null : parseInt(e.target.value), match.awayScore)}
                    className="w-12 h-10 text-center bg-[#0B1825] border border-[#1a2a3f] rounded text-white text-lg font-bold focus:border-[#C9A84C] focus:outline-none"
                    placeholder="-"
                  />
                  <span className="text-gray-500">:</span>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={match.awayScore ?? ''}
                    onChange={(e) => updateScore(match.id, match.homeScore, e.target.value === '' ? null : parseInt(e.target.value))}
                    className="w-12 h-10 text-center bg-[#0B1825] border border-[#1a2a3f] rounded text-white text-lg font-bold focus:border-[#C9A84C] focus:outline-none"
                    placeholder="-"
                  />
                </div>
                
                <div className="flex-1">
                  <span className="text-sm text-white font-medium">{match.away}</span>
                </div>
              </div>
            ))}
            
            <button
              onClick={resetSimulator}
              className="w-full py-2 text-sm text-gray-400 hover:text-white border border-dashed border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
            >
              Reiniciar simulador
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-[#1a2a3f]">
                  <th className="text-left py-2 px-2">#</th>
                  <th className="text-left py-2 px-2">Equipo</th>
                  <th className="text-center py-2 px-2">PJ</th>
                  <th className="text-center py-2 px-2">G</th>
                  <th className="text-center py-2 px-2">E</th>
                  <th className="text-center py-2 px-2">P</th>
                  <th className="text-center py-2 px-2">GF</th>
                  <th className="text-center py-2 px-2">GC</th>
                  <th className="text-center py-2 px-2">DG</th>
                  <th className="text-center py-2 px-2 font-bold text-[#C9A84C]">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, idx) => (
                  <tr 
                    key={team.name} 
                    className={`border-b border-[#1a2a3f] ${
                      idx < 2 ? 'bg-[#C9A84C08]' : ''
                    }`}
                  >
                    <td className="py-3 px-2">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${
                        idx < 2 
                          ? 'bg-[#C9A84C] text-[#030712]' 
                          : idx === 2 
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'text-gray-500'
                      }`}>
                        {idx + 1}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-white font-medium">{team.name}</span>
                    </td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.played}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.won}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.drawn}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.lost}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.gf}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.ga}</td>
                    <td className="text-center py-3 px-2 text-gray-400">{team.gd > 0 ? `+${team.gd}` : team.gd}</td>
                    <td className="text-center py-3 px-2 font-bold text-[#C9A84C]">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#C9A84C]"></span>
                <span>Clasifican directo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-blue-500/20 border border-blue-500/50"></span>
                <span>Posible 3ro</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
