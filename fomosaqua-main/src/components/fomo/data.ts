import catSurf from "@/assets/cat-surf.jpg";
import catMusic from "@/assets/cat-music.jpg";
import catSports from "@/assets/cat-sports.jpg";
import catFood from "@/assets/cat-food.jpg";
import catFamily from "@/assets/cat-family.jpg";
import eventWsl from "@/assets/event-wsl.jpg";
import eventSamba from "@/assets/event-samba.jpg";
import eventFood from "@/assets/event-food.jpg";

export type Category = {
  id: string;
  emoji: string;
  name: string;
  count: number;
  image: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "surf", emoji: "🏄", name: "Surf", count: 18, image: catSurf, tint: "from-brand-purple/70 to-transparent" },
  { id: "music", emoji: "🎵", name: "Música", count: 32, image: catMusic, tint: "from-brand-coral/70 to-transparent" },
  { id: "sports", emoji: "⚽", name: "Esportes", count: 15, image: catSports, tint: "from-brand-amber/70 to-transparent" },
  { id: "food", emoji: "🍔", name: "Gastronomia", count: 9, image: catFood, tint: "from-brand-coral/60 to-transparent" },
  { id: "culture", emoji: "🎭", name: "Cultura", count: 21, image: eventSamba, tint: "from-brand-purple/70 to-transparent" },
  { id: "family", emoji: "👨‍👩‍👧", name: "Família", count: 14, image: catFamily, tint: "from-brand-amber/70 to-transparent" },
];

export type EventItem = {
  id: string;
  category: string;
  emoji: string;
  title: string;
  date: string;
  time: string;
  location: string;
  interested: number;
  checkins: number;
  image: string;
};

export const events: EventItem[] = [
  {
    id: "wsl-itauna",
    category: "SURF",
    emoji: "🏄",
    title: "WSL Saquarema Pro",
    date: "23 JUL",
    time: "07:00",
    location: "Praia de Itaúna",
    interested: 4832,
    checkins: 218,
    image: eventWsl,
  },
  {
    id: "samba-vila",
    category: "MÚSICA",
    emoji: "🎵",
    title: "Samba da Vila",
    date: "24 JUL",
    time: "20:00",
    location: "Praça de Saquarema",
    interested: 1240,
    checkins: 96,
    image: eventSamba,
  },
  {
    id: "food-sunset",
    category: "GASTRONOMIA",
    emoji: "🍔",
    title: "Sunset Food Trucks",
    date: "25 JUL",
    time: "17:30",
    location: "Orla da Lagoa",
    interested: 2015,
    checkins: 143,
    image: eventFood,
  },
];

export const badges = [
  { icon: "🥉", name: "Explorador", req: "10 eventos", unlocked: true },
  { icon: "🥈", name: "Apaixonado por Saquarema", req: "30 eventos", unlocked: true },
  { icon: "🥇", name: "Lenda da Cidade", req: "100 eventos", unlocked: false },
  { icon: "💎", name: "Embaixador FOMO", req: "250 eventos", unlocked: false },
];
