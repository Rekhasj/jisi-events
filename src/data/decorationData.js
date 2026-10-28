import Butterfly from "../assets/PhotoShoot/butterfly.webp";
import Jiya1 from "../assets/Birthday/Jiya/One/1.webp";
import BS from "../assets/BabyShower/1.webp";
import AN2 from "../assets/ani/1.webp";
import OD from "../assets/office/1.webp";
import Haldi from "../assets/Haldi/1.webp";
import Ring3 from "../assets/ring/3.webp";

import NC1 from "../assets/NamingCeremony/1.webp";
import HD from "../assets/HouseDecoration/1.webp";
import Festival from "../assets/PhotoShoot/diwali.webp";
import {
  faBabyCarriage,
  faPersonPregnant,
} from "@fortawesome/free-solid-svg-icons";

const decorationData = {
  "baby-shower": {
    title: "Baby Shower",

    image: [BS],
    products: [
      {
        id: 1,
        name: "Balloon Arch Set",
        // price: 2499,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      },
      {
        id: 2,
        name: "Baby Shower Banner",
        // price: 599,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      },
      {
        id: 3,
        name: "Foil Balloons Pack",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
      },
      {
        id: 4,
        name: "Cake Toppers Set",
        // price: 399,
        image:
          "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400",
      },
    ],
  },
  birthday: {
    title: "Birthday Decoration",
    image: [Jiya1],

    products: [
      {
        id: 1,
        name: "Happy Birthday Banner",
        // price: 499,
        image:
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400",
      },
      {
        id: 2,
        name: "LED String Lights",
        // price: 799,
        image:
          "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400",
      },
      {
        id: 3,
        name: "Metallic Balloons",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      },
      {
        id: 4,
        name: "Party Hats Pack",
        // price: 299,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      },
    ],
  },
  photoshoot: {
    title: "Photo Shoot Ideas/Decorations",

    image: [Butterfly],

    products: [
      {
        id: 1,
        name: "Happy Birthday Banner",
        // price: 499,
        image:
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400",
      },
      {
        id: 2,
        name: "LED String Lights",
        // price: 799,
        image:
          "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400",
      },
      {
        id: 3,
        name: "Metallic Balloons",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      },
      {
        id: 4,
        name: "Party Hats Pack",
        // price: 299,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      },
    ],
  },
  anniversary: {
    title: "Anniversary Decoration",

    image: [AN2],

    products: [
      {
        id: 1,
        name: "Rose Petals Pack",
        // price: 399,
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
      },
      {
        id: 2,
        name: "Heart Balloons",
        // price: 599,
        image:
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400",
      },
      {
        id: 3,
        name: "Romantic Candles Set",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1602874801006-64c0e844ae14?w=400",
      },
      {
        id: 4,
        name: "Anniversary Banner",
        // price: 499,
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      },
    ],
  },
  "welcome-baby": {
    title: "Welcome Baby Decor",
    image: [NC1],
    products: [
      {
        id: 1,
        name: "Welcome Baby Banner",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400",
      },
      {
        id: 2,
        name: "Pastel Balloon Set",
        // price: 999,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      },
      {
        id: 3,
        name: "Baby Footprint Decor",
        // price: 599,
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      },
      {
        id: 4,
        name: "Nursery Wall Stickers",
        // price: 799,
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400",
      },
    ],
  },
  "ring-ceremony": {
    title: "Ring Ceremony",
    image: [Ring3],

    products: [
      {
        id: 1,
        name: "Floral Backdrop",
        // price: 3999,
        image:
          "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400",
      },
      {
        id: 2,
        name: "Gold Balloon Arch",
        // price: 1999,
        image:
          "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=400",
      },
      {
        id: 3,
        name: "Table Centerpieces",
        // price: 1299,
        image:
          "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400",
      },
      {
        id: 4,
        name: "LED Curtain Lights",
        // price: 1499,
        image:
          "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400",
      },
    ],
  },
  "haldi-ceremony": {
    title: "Haldi Ceremony",
    image: [Haldi],
    products: [
      {
        id: 1,
        name: "Marigold Garlands",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400",
      },
      {
        id: 2,
        name: "Yellow Drapes",
        // price: 1599,
        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
      },
      {
        id: 3,
        name: "Floral Photo Booth",
        // price: 2499,
        image:
          "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400",
      },
      {
        id: 4,
        name: "Traditional Toran",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400",
      },
    ],
  },
  festivals: {
    title: "Festivals Decoration",
    image: [Festival],
    products: [
      {
        id: 1,
        name: "Diwali Lights Set",
        // price: 1299,
        image:
          "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400",
      },
      {
        id: 2,
        name: "Rangoli Stencils",
        // price: 399,
        image:
          "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400",
      },
      {
        id: 3,
        name: "Paper Lanterns",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1476900966873-ab290e6b8b8b?w=400",
      },
      {
        id: 4,
        name: "Festival Banners",
        // price: 599,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      },
    ],
  },
  "naming-ceremony": {
    title: "Naming Ceremony",
    image: [NC1],
    products: [
      {
        id: 1,
        name: "Custom Name Banner",
        // price: 799,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
      },
      {
        id: 2,
        name: "Baby Milestone Board",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      },
      {
        id: 3,
        name: "Photo Booth Props",
        // price: 599,
        image:
          "https://images.ubsplash.com/photo-1520854221256-17451cc331bf?w=400",
      },
      {
        id: 4,
        name: "Balloon Bouquet",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      },
    ],
  },
  "house-warming": {
    title: "House Warming Decors",
    image: [HD],
    products: [
      {
        id: 1,
        name: "Welcome Door Hanging",
        // price: 799,
        image:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400",
      },
      {
        id: 2,
        name: "Pooja Thali Set",
        // price: 1299,
        image:
          "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400",
      },
      {
        id: 3,
        name: "Bandhani Torans",
        // price: 699,
        image:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400",
      },
      {
        id: 4,
        name: "Kalash Decoration",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      },
    ],
  },
  office: {
    title: "Office Decoration",
    image: [OD],
    products: [
      {
        id: 1,
        name: "Corporate Backdrop",
        // price: 2999,
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      },
      {
        id: 2,
        name: "Desk Plants Set",
        // price: 1199,
        image:
          "https://images.unsplash.com/photo-1508003516902-32d4c2d187da?w=400",
      },
      {
        id: 3,
        name: "Motivational Posters",
        // price: 899,
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400",
      },
      {
        id: 4,
        name: "LED Name Board",
        // price: 1999,
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      },
    ],
  },
};

const decorationCategories = [
  {
    id: "birthday",
    name: "Birthday Balloon & Theme Decorations",
    emoji: "🎈",
    color: "#ec4899",
  },
  {
    id: "baby-shower",
    name: "Baby Shower Decorations",
    emoji: "👶",
    iconName: faPersonPregnant,
    color: "#f472b6",
  },
  {
    id: "anniversary",
    name: "Anniversary Celebrations",
    emoji: "💕",
    color: "#f43f5e",
  },
  {
    id: "welcome-baby",
    name: "Welcome Baby Decor / Naming Ceremony",
    emoji: "🎁",
    iconName: faBabyCarriage,

    color: "#fbbf24",
  },
  {
    id: "ring-ceremony",
    name: "Ring Ceremony Decorations",
    emoji: "💍",
    color: "#a855f7",
  },
  {
    id: "haldi-ceremony",
    name: "Haldi Ceremony Setup",
    emoji: "✨",
    color: "#fbbf24",
  },
  {
    id: "festivals",
    name: "Festival Decorations",
    emoji: "🪔",
    color: "#fb923c",
  },
  {
    id: "house-warming",
    name: "Housewarming Decor",
    emoji: "🏠",
    color: "#10b981",
  },
  {
    id: "office",
    name: "Office Party Decorations",
    emoji: "🎉",
    color: "#3b82f6",
  },
];

const decorationDataComingSoon = [
  {
    id: "games",
    name: "Games & Activities",
    emoji: "🎲",
    iconName: "",
    color: "#f59e0b",
  },
  {
    id: "music",
    name: "Music",
    emoji: "🎵",
    iconName: "",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
  {
    id: "catering",
    name: "Short Eats & Chaats",
    emoji: "🍽️",
    iconName: "",
    color: "#a855f7",
    bgGradient: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
  },
  {
    id: "Entertainment",
    name: "Entertainment",
    emoji: "🎭",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
  },
  {
    id: "fun-activities",
    name: "Fun Activities",
    emoji: "🎨",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
  },
  {
    id: "photography",
    name: "Photography – Photos & Videos",
    emoji: "📸",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
  },
  {
    id: "sound-light",
    name: "Sound & Light",
    emoji: "🔊",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
  {
    id: "return-gifts",
    name: "Return Gifts",
    emoji: "🎁",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
];

export { decorationData, decorationCategories, decorationDataComingSoon };
