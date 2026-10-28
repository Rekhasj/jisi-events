// Birthday
import bd1 from "../assets/Birthday/1.webp";
import bd2 from "../assets/Birthday/2.webp";
import bd3 from "../assets/Birthday/3.webp";
import bd4 from "../assets/Birthday/4.webp";
import bd5 from "../assets/Birthday/5.webp";
import bd6 from "../assets/Birthday/6.webp";
import bd7 from "../assets/Birthday/7.webp";
import bd8 from "../assets/Birthday/8.webp";
import bd10 from "../assets/Birthday/10.webp";
import bd11 from "../assets/Birthday/11.webp";
import bd13 from "../assets/Birthday/13.webp";
import bd14 from "../assets/Birthday/14.webp";
import bd15 from "../assets/Birthday/15.webp";
import bd20 from "../assets/Birthday/20.webp";

// Photoshoot
import ps1 from "../assets/PhotoShoot/jiya1.webp";
import ps2 from "../assets/PhotoShoot/krishna/k3.webp";
import ps3 from "../assets/PhotoShoot/nature.webp";
import ps4 from "../assets/PhotoShoot/sibling.webp";
import ps5 from "../assets/PhotoShoot/nature_2.webp";
import ps6 from "../assets/PhotoShoot/butterfly.webp";
import ps7 from "../assets/PhotoShoot/krishna/rk7.webp";
import ps8 from "../assets/PhotoShoot/chocolate.webp";
import ps9 from "../assets/PhotoShoot/dresshanger.webp";
import ps10 from "../assets/PhotoShoot/eight.webp";
import ps11 from "../assets/PhotoShoot/kitchen.webp";
import ps12 from "../assets/PhotoShoot/name.webp";

// Milestones
// import m1 from "../assets/Milestones/1st.jpg";
// import m2 from "../assets/Milestones/2nd.jpg";
// import m3 from "../assets/Milestones/3rd.jpg";
// import m4 from "../assets/Milestones/4th.jpg";
// import m5 from "../assets/Milestones/5th.jpg";

// Festivals
import krishna from "../assets/PhotoShoot/krishna/rk6.webp";
import diwali from "../assets/PhotoShoot/diwali.webp";

// Nature
import butterfly from "../assets/PhotoShoot/butterfly.webp";
import horse from "../assets/PhotoShoot/horse.webp";

import Toy from "../assets/PhotoShoot/toys.webp";
import Toy2 from "../assets/PhotoShoot/toys_2.webp";
import Butterfly from "../assets/PhotoShoot/butterfly.webp";

import BS1 from "../assets/BabyShower/1.webp";
import BS2 from "../assets/BabyShower/2.webp";
import BS3 from "../assets/BabyShower/3.webp";

import Ballon from "../assets/ballonCarousel.webp";

import NC1 from "../assets/NamingCeremony/1.webp";
import NC2 from "../assets/NamingCeremony/2.webp";
import NC3 from "../assets/NamingCeremony/3.webp";

import Festival from "../assets/PhotoShoot/diwali.webp";

import OD1 from "../assets/office/1.webp";
import OD2 from "../assets/office/2.webp";
import OD3 from "../assets/office/3.webp";

import Ring1 from "../assets/ring/1.webp";
import Ring2 from "../assets/ring/2.webp";
import Ring3 from "../assets/ring/3.webp";

import AN1 from "../assets/ani/1.webp";
import AN2 from "../assets/ani/2.webp";
import AN3 from "../assets/ani/3.webp";
import AN4 from "../assets/ani/4.webp";

import Haldi from "../assets/Haldi/1.webp";
import Haldi2 from "../assets/Haldi/2.webp";
import Haldi3 from "../assets/Haldi/3.webp";
import Haldi4 from "../assets/Haldi/4.webp";
import Mehendi from "../assets/Haldi/mehendi.webp";

import HD1 from "../assets/HouseDecoration/1.webp";
import HD2 from "../assets/HouseDecoration/2.webp";
import HD3 from "../assets/HouseDecoration/3.webp";
import HD4 from "../assets/HouseDecoration/4.webp";

import Fest1 from "../assets/Festival/1.webp";
import Fest2 from "../assets/Festival/2.webp";

const galleryData = {
  Birthday: [
    bd1,
    bd2,
    bd3,
    bd4,
    bd5,
    bd6,
    bd7,
    bd8,
    bd10,
    bd11,
    bd13,
    bd14,
    bd15,
    bd20,
  ],
  "Photo Shoot": [
    ps1,
    ps2,
    ps3,
    horse,
    ps4,
    ps5,
    ps6,
    ps7,
    ps8,
    ps9,
    ps10,
    ps11,
    ps12,
  ],
  "Haldi & Mehendi": [Haldi, Haldi2, Haldi3, Haldi4, Mehendi],
  Anniversary: [AN1, AN2, AN3, AN4],
  "Ring Ceremony": [Ring1, Ring2, Ring3],
  "Naming Ceremony": [NC1, NC2, NC3],

  //   milestones: [
  //     { title: "1st Birthday", img: m1 },
  //     { title: "2nd Birthday", img: m2 },
  //     { title: "3rd Birthday", img: m3 },
  //     { title: "4th Birthday", img: m4 },
  //     { title: "5th Birthday", img: m5 },
  //   ],

  Festivals: [Fest1, Fest2, krishna, diwali],

  "House Warming": [HD1, HD2, HD3, HD4],

  Nature: [butterfly, Toy, horse],

  "Baby Shower": [BS1, BS2, BS3],

  Office: [OD1, OD2, OD3],
};

const recentDecorationImages = {
  decoration: [Toy, bd5, BS2, Toy2, bd1, NC2, horse, AN2],

  recentDecor: [Toy, bd4, bd3, Haldi, diwali, bd2, BS3, bd5, bd13],
  packages: [
    Toy,
    bd4,
    bd1,
    bd7,
    Toy,
    horse,
    bd3,
    Ballon,
    ps3,
    ps4,
    ps5,
    Butterfly,
  ],
};

const carouselData = [bd1, bd2, ps5, ps3, Toy, horse];

export { recentDecorationImages, galleryData, carouselData };
