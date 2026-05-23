import { Prophet } from '../types';
import { prophetsPart1 } from './prophets_part1';
import { prophetsPart2 } from './prophets_part2';

// Combined database of all 25 Prophets referenced in the Holy Quran
export const prophets: Prophet[] = [
  ...prophetsPart1,
  ...prophetsPart2
];

// Helper to look up a prophet by ID
export const getProphetById = (id: string): Prophet | undefined => {
  return prophets.find(p => p.id === id);
};

// Helper to get next and previous prophets for pagination
export const getAdjacentProphets = (index: number) => {
  const prev = prophets.find(p => p.index === index - 1) || null;
  const next = prophets.find(p => p.index === index + 1) || null;
  return { prev, next };
};
