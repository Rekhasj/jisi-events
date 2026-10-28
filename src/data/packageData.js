const packagesDataByCategory = {
  general: [
    {
      title: "Budget Package",
      price: "₹2,499",
      description: "Simple & affordable for small celebrations",
      items: [
        "Pre-printed themed banner (Happy Birthday/Baby Shower/Anniversary)",
        "30-50 balloons (mixed colors)",
        "2 themed foil balloons",
        "Basic table decoration",
        "Setup included",
      ],
      popular: false,
      badge: "Budget Friendly",
    },
    {
      title: "Basic Package",
      price: "₹4,999",
      description: "Perfect for intimate celebrations",
      items: [
        "Event-specific customized banner with name",
        "50-80 balloons (mix colors/theme-based)",
        "Themed foil balloons (2-3 pieces)",
        "Basic table/seating decoration",
        "Simple backdrop or photo corner",
        "Fresh flower arrangement (optional add-on)",
        "Setup & cleanup included",
      ],
      popular: false,
    },
    {
      title: "Premium Package",
      price: "₹9,999",
      description: "Most popular choice for memorable events",
      items: [
        "Everything in Basic Package",
        "Themed backdrop (6x4 ft or 8x6 ft)",
        "80-100 balloons with arch/garland",
        "LED lights or string lights decoration",
        "Photo booth setup with props",
        "Enhanced table decoration (cake/gift table)",
        "Fresh flower arrangements (marigold/roses based on event)",
        "Event-specific decorative elements (diyas/candles/props)",
        "Rose petals arrangement (for romantic events)",
      ],
      popular: true,
      badge: "Most Popular",
    },
    // {
    //   title: "Deluxe Package",
    //   price: "₹17,999",
    //   description: "Complete venue transformation for grand celebrations",
    //   items: [
    //     "Everything in Premium Package",
    //     "Grand stage decoration (customized)",
    //     "200+ balloons with columns/clouds/cascades",
    //     "Custom theme setup (any theme)",
    //     "Entrance decoration with grand arch",
    //     "Ceiling decorations & hangings",
    //     "Chair covers & sashes (if required)",
    //     "Multiple photo corners/booth areas",
    //     "LED signage or custom name boards",
    //     "Premium fresh flower decorations (garlands/rangoli/centerpieces)",
    //     "Traditional elements (toran/mandap/umbrellas for haldi)",
    //     "Pathway decoration with flowers/lights",
    //     "2-3 professional decorators on-site",
    //     "Complete venue transformation",
    //     "Extended setup time support",
    //   ],
    //   popular: false,
    //   badge: "Premium Choice",
    // },
  ],
  birthday: [
    {
      title: "Basic Birthday Package",
      items: [
        "Birthday banner with name",
        "50 balloons (mix colors)",
        "Happy Birthday foil balloon",
        "Basic table decoration",
        "Setup & cleanup included",
      ],
    },
    {
      title: "Premium Birthday Package",
      items: [
        "Everything in Basic",
        "Themed backdrop (6x4 ft)",
        "100 balloons with arch",
        "LED lights decoration",
        "Photo booth props",
        "Cake table decoration",
      ],
    },
    {
      title: "Deluxe Birthday Package",
      items: [
        "Everything in Premium",
        "Stage decoration (8x6 ft)",
        "200+ balloons with columns",
        "Custom theme setup",
        "Chair covers & sashes",
        "Entrance decoration",
        "2 decorators on-site",
      ],
    },
  ],
  babyshower: [
    {
      title: "Basic Baby Shower",
      items: [
        "Welcome banner",
        "Pastel balloon arrangement (50)",
        "Mom-to-be chair decoration",
        "Photo booth area",
        "Setup included",
      ],
    },
    {
      title: "Premium Baby Shower",
      items: [
        "Everything in Basic",
        "Gender reveal backdrop",
        "100 balloons with garland",
        "Floral arrangements",
        "Gift table decoration",
        "Themed props & cutouts",
      ],
    },
    {
      title: "Deluxe Baby Shower",
      items: [
        "Everything in Premium",
        "Grand entrance arch",
        "200+ balloons with clouds",
        "Custom signage boards",
        "Ceiling decorations",
        "Baby shower game setup",
        "Professional decorator team",
      ],
    },
  ],
  anniversary: [
    {
      title: "Basic Anniversary",
      items: [
        "Anniversary banner",
        "50 red & gold balloons",
        "Heart-shaped foil balloons",
        "Romantic table setup",
        "Rose petals arrangement",
      ],
    },
    {
      title: "Premium Anniversary",
      items: [
        "Everything in Basic",
        "Romantic photo backdrop",
        "100 balloons with heart arch",
        "String lights & candles",
        "Photo collage display",
        "Memory lane setup",
      ],
    },
    {
      title: "Deluxe Anniversary",
      items: [
        "Everything in Premium",
        "Grand romantic stage",
        "200+ balloons with columns",
        "LED love sign",
        "Flower wall decoration",
        "Special couple seating",
        "Complete venue transformation",
      ],
    },
  ],
  welcomebaby: [
    {
      title: "Basic Naming Ceremony",
      items: [
        "Welcome baby banner",
        "40 pastel balloons",
        "Baby name display",
        "Cradle decoration",
        "Basic setup",
      ],
    },
    {
      title: "Premium Naming Ceremony",
      items: [
        "Everything in Basic",
        "Themed backdrop (6x4 ft)",
        "80 balloons with arch",
        "Floral arrangements",
        "Photo corner",
        "Gift table decoration",
      ],
    },
  ],
  ring: [
    {
      title: "Basic Ring Ceremony",
      items: [
        "Engagement banner",
        "50 elegant balloons",
        "Ring display setup",
        "Couple seating decoration",
        "Basic floral arrangement",
      ],
    },
    {
      title: "Premium Ring Ceremony",
      items: [
        "Everything in Basic",
        "Elegant backdrop (8x6 ft)",
        "100 balloons with columns",
        "LED lighting",
        "Photo booth setup",
        "Stage decoration",
      ],
    },
  ],
  haldi: [
    {
      title: "Basic Haldi Setup",
      items: [
        "Yellow & orange marigold decoration",
        "Seating area for bride/groom",
        "Flower arrangements",
        "Traditional backdrop",
        "Basic setup",
      ],
    },
    {
      title: "Premium Haldi Setup",
      items: [
        "Everything in Basic",
        "Grand floral arch",
        "Umbrella decoration",
        "Photo corner with props",
        "Pathway decoration",
        "Complete venue setup",
      ],
    },
  ],
  festival: [
    {
      title: "Basic Festival Decoration",
      items: [
        "Traditional entrance decoration",
        "Rangoli design",
        "Flower garlands",
        "Diya arrangements",
        "Basic lighting",
      ],
    },
    {
      title: "Premium Festival Decoration",
      items: [
        "Everything in Basic",
        "Grand entrance arch",
        "LED light decorations",
        "Themed backdrop",
        "Decorative hangings",
        "Complete pooja area setup",
      ],
    },
  ],
  housewarming: [
    {
      title: "Basic Housewarming",
      items: [
        "Welcome banner",
        "Entrance decoration",
        "Flower arrangements",
        "Traditional toran",
        "Basic setup",
      ],
    },
    {
      title: "Premium Housewarming",
      items: [
        "Everything in Basic",
        "Grand entrance arch",
        "Balloon decoration (80)",
        "Photo corner",
        "Pooja room decoration",
        "Complete home setup",
      ],
    },
  ],
  office: [
    {
      title: "Basic Office Party",
      items: [
        "Event banner",
        "50 corporate colored balloons",
        "Desk decorations",
        "Photo booth area",
        "Basic setup",
      ],
    },
    {
      title: "Premium Office Party",
      items: [
        "Everything in Basic",
        "Themed backdrop",
        "100 balloons with arch",
        "Conference room decoration",
        "Stage setup for presentations",
        "Complete office transformation",
      ],
    },
  ],
};

export { packagesDataByCategory };
