// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../../lib/mongodb";
// const acc = [
//   {
//     category: "Accessories",
//     price: 1299,
//     actionPrice: 599,
//     description: `Double-wall insulation to keep your drinks hot and cold for hours
//         Durable stainless steel construction with a bring-anywhere design
//         100% leakproof
//         500ml capacity`,
//     img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
//     name: "TummyTox Челично Шише",
//   },
//   {
//     category: "Accessories",

//     price: 599,
//     actionPrice: 299,
//     description: `4-piece shaker bottle for perfectly mixed protein shakes or meal replacements anytime and anywhere
//         500 ml capacity – great for vigorous workouts and use on the go
//         With a snap-on concave-shaped strainer for smooth & lump-free shakes
//         100% leak-proof. Made from top-quality BPA-free plastic – durable and safe for long-term use
//         Doubles as a reusable water bottle`,
//     img: "https://tummytox.mk/wp-content/uploads/2021/06/140098_tummytox_shaker-white-700_3.png",
//     name: "TummyTox White Shaker",
//   },
//   {
//     category: "Accessories",
//     price: 999,
//     actionPrice: 799,
//     description: "Top produkt",
//     img: "https://tummytox.mk/wp-content/uploads/2021/06/140055_tummytox_bottle-700_3.png",
//     name: "Booty band",
//   },
// ];

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  // db.collection("accessories").insertMany(acc);
  const products = await db.collection("accessories").find({}).toArray();

  return res.json(products);
}
