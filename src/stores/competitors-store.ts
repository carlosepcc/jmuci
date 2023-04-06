import { ref, Ref, computed, ComputedRef } from "vue";

export interface Competitor {
  name: string;
  fullName?: string;
  color: string;
  textColor?: string;
  emoji: string;
  logo?: string;
  gold?: number;
  silver?: number;
  bronze?: number;
  score: number;
  description?: string;
}
export const rawCompetitors: Competitor[] = [
  {
    name: "Facultad 4",
    color: "purple",
    emoji: "🐊",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fac4-1536x1431.png",
    logo: "src/assets/fac4.webp",
    gold: 25,
    silver: 10,
    bronze: 12,
    score: 1094,
    description: `<h4>Muerden fuerte los Caimanes en los primeros días de competencia</h4>
<p><small>May 25, 2023</small></p>
<p>Los caimanes de la facultad 4 comienzan mordiendo fuerte al conquistar 3 oros en disputa en los primeros días. Lograron alzarse con el del voly de playa femenino ante la facultad CITEC, además de los dos oros de la maratón.
</p>
<a href="https://jdeportivos.uci.cu/muerden-fuerte-los-caimanes-en-los-primeros-dias-de-competencia/"><small>jdeportivos.uci.cu</small></a>`,
  },
  {
    name: "Facultad 2",
    color: "black",
    emoji: "🦂",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fac2.png",

    logo: "src/assets/fac2.webp",
    gold: 12,
    silver: 20,
    bronze: 18,
    score: 881,
    description: ``,
  },
  {
    name: "FTE",
    color: "orange",
    emoji: "🐺",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fac-TECN-EDUC-1203x1536.png",
    logo: "src/assets/fte.webp",
    gold: 9,
    silver: 7,
    bronze: 16,
    fullName: "Facultad de Tecnologías Educativas",
    score: 583,
    description: ``,
  },
  {
    name: "Facultad 1",
    color: "white",
    emoji: "🦊",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fac1-1372x1536.png",
    logo: "src/assets/fac1.webp",
    gold: 12,
    silver: 17,
    bronze: 15,
    textColor: "#000b",
    score: 823,
    description: ``,
  },
  {
    name: "CITEC",
    fullName: "Facultad de Ciencias y Tecnologías Computacionales",
    color: "red",
    emoji: "⚔",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fctc-1536x1505.png",
    logo: "src/assets/citec.webp",
    gold: 19,
    silver: 15,
    bronze: 24,
    score: 1077,
    description: ``,
  },
  {
    name: "Facultad 3",
    color: "indigo",
    emoji: "🐲",
    //logo: "https://jdeportivos.uci.cu/wp-content/uploads/2022/05/fac3.png",
    logo: "@public/fac3.webp",
    gold: 15,
    silver: 23,
    bronze: 16,
    score: 983,
    description: ``,
  },
];


const competitors: ComputedRef<Competitor[]> = computed(() => rawCompetitors.sort((a, b) => b.score - a.score))

export const scoreFactors = [31, 15, 7, 3];

export function calculateScore(gold = 0, silver = 0, bronze = 0) {
  return 31 * gold + 15 * silver + 7 * bronze;
}
export default competitors
