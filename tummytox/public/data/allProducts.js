const data = [
  {
    category: "Accessories",
    price: 1299,
    actionPrice: 599,
    description: `Double-wall insulation to keep your drinks hot and cold for hours
          Durable stainless steel construction with a bring-anywhere design
          100% leakproof
          500ml capacity`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "TummyTox bottle",
  },
  {
    category: "Accessories",

    price: 599,
    actionPrice: 299,
    description: `4-piece shaker bottle for perfectly mixed protein shakes or meal replacements anytime and anywhere
          500 ml capacity – great for vigorous workouts and use on the go
          With a snap-on concave-shaped strainer for smooth & lump-free shakes
          100% leak-proof. Made from top-quality BPA-free plastic – durable and safe for long-term use
          Doubles as a reusable water bottle`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140098_tummytox_shaker-white-700_3.png",
    name: "TummyTox White Shaker",
  },
  {
    category: "Accessories",
    price: 999,
    actionPrice: 799,
    description: "Top produkt",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140097_tummytox_elastic-band-700_3.png",
    name: "Booty band",
  },
  {
    category: "Accessories",
    price: 999,
    actionPrice: 599,
    description:
      "Lovely stainless-steel mug to keep drinks hot or cold for longer!",
    img: "https://www.sensi2live.com/media/catalog/product/cache/eec48ab0b6fb28750d7cc7bb3f0d50b1/1/4/140148_tt_tummytox_mug-700_1.webp",
    name: "TummyTox Tea Mug",
  },
  {
    category: "Accessories",
    price: 1599,
    actionPrice: 1099,
    description:
      "Beautiful stainless-steel bottle for keeping drinks hot or cool for hours!  ",
    img: "https://www.sensi2live.com/media/catalog/product/cache/eec48ab0b6fb28750d7cc7bb3f0d50b1/1/4/140224_tummytox_bottle_beige_1x_-700_1.png",
    name: "Beige TummyTox Bottle",
  },
  {
    category: "Accessories",
    price: 1299,
    actionPrice: 899,
    description:
      "Easy-to use, cordless blackhead vacuum that reduces impurities, enlarged pores and fine lines!",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/1/4/140137_tummytox_vacuum-pore-cleaner-700.png",
    name: "Vacuum Pore Cleaner",
  },
  {
    category: "Beauty",
    price: 1899,
    actionPrice: 899,
    description: `Hair-growth supplement designed for women that reduces hair loss and supports hair growth.`,
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/1/4/140210_tummytox_duble-hair-2x-700_2.png",
    name: "Double Hair",
  },
  {
    category: "Beauty",

    price: 1599,
    actionPrice: 999,
    description: `Delicious collagen supplement to increase collagen production and support the skin, hair, blood vessels and joints.`,
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/x/x/xxxxxx_tummytox_miss_collagen_3x-700.png",
    name: "Miss Collagen",
  },
  {
    category: "Beauty",
    price: 1599,
    actionPrice: 699,
    description:
      "Drink with hydrolised marine collagen for strong nails, thick hair and radiant skin.",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/9/0/902080_tummytox_collagen_drink_2x-700.png",
    name: "Collagen Drink",
  },

  {
    category: "Beauty",
    price: 1199,
    actionPrice: 599,
    description:
      "Anti-cellulite lotion for targeting problem areas with fat-burning and skin-loving ingredients.",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/1/4/140206_tummy_tox_anti-cellulite_lotion_150ml-1x-700.png",
    name: "Anti-Cellulite Lotion",
  },
  {
    category: "Beauty",
    price: 1499,
    actionPrice: 899,
    description: "A firming body cream for irresistible and radiant skin.",
    img: "https://www.sensi2live.com/media/catalog/product/cache/eec48ab0b6fb28750d7cc7bb3f0d50b1/1/4/140207_tummytox_slim_firm_body_cream",
    name: "Slim & Firm Body Cream",
  },
  {
    category: "Beauty",
    price: 1099,
    actionPrice: 599,
    description:
      "Skin-nurturing tanning cream for faster and safer tanning. With a lovely summery scent, fast absorption, and no sticky residue.",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/1/4/140208_tummytox_bronze_booster_1x-700_1.png",
    name: "Bronze Booster",
  },
  {
    category: "Beauty",
    price: 1099,
    actionPrice: 599,
    description:
      "Yummy gummy bears with all the necessary micro-nutrients for faster hair growth, glowing skin and stronger nails.",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/9/0/902883_tummytox_beauty-drink_shine-bright-gummies-700.png",
    name: "Shine Bright - Beauty Gummies For Hair, Skin & Nails",
  },
  {
    category: "Beauty",
    price: 1199,
    actionPrice: 799,
    description:
      "Delicious hair gummies with triple action for visible results: gorgeous hair and even strong nails!",
    img: "https://www.sensi2live.com/media/catalog/product/cache/5c82f07296e102476ab8c67f96f42fcf/9/0/905659_tummytox_hair_care_gummies_2x-700_1.png",
    name: "Hair Care Gummies",
  },
  {
    category: "Health And Detox",
    price: 1299,
    actionPrice: 599,
    description: `Double-wall insulation to keep your drinks hot and cold for hours
            Durable stainless steel construction with a bring-anywhere design
            100% leakproof
            500ml capacity`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Daily Kick & Sleep Tight Tea",
  },
  {
    category: "Health And Detox",

    price: 599,
    actionPrice: 299,
    description: `4-piece shaker bottle for perfectly mixed protein shakes or meal replacements anytime and anywhere
            500 ml capacity – great for vigorous workouts and use on the go
            With a snap-on concave-shaped strainer for smooth & lump-free shakes
            100% leak-proof. Made from top-quality BPA-free plastic – durable and safe for long-term use
            Doubles as a reusable water bottle`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140098_tummytox_shaker-white-700_3.png",
    name: "Pure Me Tea",
  },
  {
    category: "Health And Detox",
    price: 999,
    actionPrice: 799,
    description: "Top produkt",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Shape & Detox",
  },
  {
    category: "Sport",
    price: 1299,
    actionPrice: 599,
    description: `Double-wall insulation to keep your drinks hot and cold for hours
                Durable stainless steel construction with a bring-anywhere design
                100% leakproof
                500ml capacity`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Magicnesium",
  },
  {
    category: "Sport",

    price: 599,
    actionPrice: 299,
    description: `4-piece shaker bottle for perfectly mixed protein shakes or meal replacements anytime and anywhere
                500 ml capacity – great for vigorous workouts and use on the go
                With a snap-on concave-shaped strainer for smooth & lump-free shakes
                100% leak-proof. Made from top-quality BPA-free plastic – durable and safe for long-term use
                Doubles as a reusable water bottle`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140098_tummytox_shaker-white-700_3.png",
    name: "Waist and Leg Shaper",
  },
  {
    category: "Sport",
    price: 999,
    actionPrice: 799,
    description: "Top produkt",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Booty band",
  },
  {
    category: "Weight loss",
    price: 1899,
    actionPrice: 1299,
    description: `Capsules for a flat belly with super effective patented ingredients.`,
    img: "https://www.sensi2live.com/media/catalog/product/cache/d28d44336856800a6f6001c5ca4cc27a/1/4/140210_tummytox_duble-hair-1x-300.webp",
    name: "Belly Shaper",
  },
  {
    category: "Weight loss",

    price: 1599,
    actionPrice: 1199,
    description: `A delicious drink that helps boost fat burning and improves sleep.`,
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140098_tummytox_shaker-white-700_3.png",
    name: "Night Burner Drink",
  },
  {
    category: "Weight loss",
    price: 1699,
    actionPrice: 1199,
    description:
      "A fat-burning drink that helps shed fat while you sleep, now in a limited-edition mango flavour.",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "3-in-1 Limited Draining Drink Peach Iced Tea",
  },

  {
    category: "Weight loss",
    price: 1999,
    actionPrice: 1599,
    description:
      "Anti-cellulite lotion for targeting problem areas with fat-burning and skin-loving ingredients.",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Fat Burner Drink",
  },
  {
    category: "Weight loss",
    price: 1499,
    actionPrice: 899,
    description:
      "2-in-1 fat-burning capsules for targeted shaping of waist and thighs!",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Waist & Leg Shaper",
  },
  {
    category: "Weight loss",
    price: 1099,
    actionPrice: 599,
    description: "A powerful aid on your weight-loss journey!",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Slim Tummy Caps - Garcinia Gambogia",
  },
  {
    category: "Weight loss",
    price: 1099,
    actionPrice: 699,
    description:
      "Capsules that reduce cellulite, improve skin appearance and aid weight loss!",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Cellulite Reducer",
  },
  {
    category: "Weight loss",
    price: 1599,
    actionPrice: 399,
    description:
      "Super effective double-power appetite suppressant with fat-burning action designed to curb cravings and aid weight loss.",
    img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
    name: "Craving Blocker",
  },
];
