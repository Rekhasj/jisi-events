// Birthday
import bd1 from "../assets/Birthday/1.jpeg";
import bd2 from "../assets/Birthday/2.jpeg";
import bd3 from "../assets/Birthday/3.png";
import bd4 from "../assets/Birthday/4.jpeg";
import bd5 from "../assets/Birthday/5.jpeg";
import bd6 from "../assets/Birthday/6.jpeg";
import bd7 from "../assets/Birthday/7.jpeg";
import bd8 from "../assets/Birthday/8.png";
import bd10 from "../assets/Birthday/10.jpeg";
import bd11 from "../assets/Birthday/11.jpeg";
import bd13 from "../assets/Birthday/13.png";
import bd14 from "../assets/Birthday/14.png";
import bd15 from "../assets/Birthday/15.jpeg";
import bd20 from "../assets/Birthday/20.png";

// Photoshoot
import ps1 from "../assets/PhotoShoot/jiya1.jpeg";
import ps2 from "../assets/PhotoShoot/krishna/k3.jpeg";
import ps3 from "../assets/PhotoShoot/nature.jpeg";
import ps4 from "../assets/PhotoShoot/sibling.jpeg";
import ps5 from "../assets/PhotoShoot/nature_2.jpeg";
import ps6 from "../assets/PhotoShoot/butterfly.jpeg";
import ps7 from "../assets/PhotoShoot/krishna/rk7.jpeg";
import ps8 from "../assets/PhotoShoot/chocolate.jpeg";
import ps9 from "../assets/PhotoShoot/dresshanger.jpeg";
import ps10 from "../assets/PhotoShoot/eight.jpeg";
import ps11 from "../assets/PhotoShoot/kitchen.jpeg";
import ps12 from "../assets/PhotoShoot/name.jpeg";
import ps13 from "../assets/PhotoShoot/sibling.jpeg";

// Milestones
// import m1 from "../assets/Milestones/1st.jpg";
// import m2 from "../assets/Milestones/2nd.jpg";
// import m3 from "../assets/Milestones/3rd.jpg";
// import m4 from "../assets/Milestones/4th.jpg";
// import m5 from "../assets/Milestones/5th.jpg";

// Festivals
import krishna from "../assets/PhotoShoot/krishna/rk6.jpeg";
import diwali from "../assets/PhotoShoot/diwali.jpeg";

// Nature
import butterfly from "../assets/PhotoShoot/butterfly.jpeg";
import horse from "../assets/PhotoShoot/horse.jpeg";

import Toy from "../assets/PhotoShoot/toys.jpeg";
import Toy2 from "../assets/PhotoShoot/toys_2.jpeg";
import Butterfly from "../assets/PhotoShoot/butterfly.jpeg";

import BS1 from "../assets/BabyShower/1.jpeg";
import BS2 from "../assets/BabyShower/2.jpeg";
import BS3 from "../assets/BabyShower/3.jpeg";

import Ballon from "../assets/ballonCarousel.jpg";

import NC1 from "../assets/NamingCeremony/1.png";
import NC2 from "../assets/NamingCeremony/2.png";
import NC3 from "../assets/NamingCeremony/3.jpeg";

import Festival from "../assets/PhotoShoot/diwali.jpeg";

import OD1 from "../assets/office/1.png";
import OD2 from "../assets/office/2.png";
import OD3 from "../assets/office/3.webp";

import Ring1 from "../assets/ring/1.png";
import Ring2 from "../assets/ring/2.png";
import Ring3 from "../assets/ring/3.png";

import AN1 from "../assets/ani/1.png";
import AN2 from "../assets/ani/2.jpeg";
import AN3 from "../assets/ani/3.png";
import AN4 from "../assets/ani/4.jpeg";

import Haldi from "../assets/Haldi/1.png";
import Haldi2 from "../assets/Haldi/2.png";
import Haldi3 from "../assets/Haldi/3.png";
import Haldi4 from "../assets/Haldi/4.png";

const galleryData = {
  birthday: [
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
  photoshoot: [
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
    ps13,
  ],
  haldi: [Haldi, Haldi2, Haldi3, Haldi4],
  anniversay: [AN1, AN2, AN3, AN4],
  "ring Ceremony": [Ring1, Ring2, Ring3],
  "naming Ceremony": [NC1, NC2, NC3],

  //   milestones: [
  //     { title: "1st Birthday", img: m1 },
  //     { title: "2nd Birthday", img: m2 },
  //     { title: "3rd Birthday", img: m3 },
  //     { title: "4th Birthday", img: m4 },
  //     { title: "5th Birthday", img: m5 },
  //   ],

  festivals: [krishna, diwali],

  nature: [butterfly, Toy, horse],

  "Baby Shower": [BS1, BS2, BS3],

  office: [OD1, OD2, OD3],
};

const recentDecorationImages = {
  decoration: [Toy, bd5, BS2, Toy2, bd1, NC2, horse, AN2],

  "recent Decor": [Toy, bd4, bd3, Haldi, diwali, bd2, BS3, bd5, bd13],
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
