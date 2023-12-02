// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../../lib/mongodb";
// import { accProducts } from "../../../public/data/accessories";
// import { beautyProducts } from "../../../public/data/beauty";
// import { weightLossProducts } from "../../../public/data/weightloss";
// import { sportProducts } from "../../../public/data/sport";
// import { healthDetoxProducts } from "../../../public/data/healthAndDetox";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");
  const collection = req.query.collection;

  // db.collection("healthAndDetox").insertMany(healthDetoxProducts);
  const products = await db.collection(collection).find({}).toArray();

  return res.status(200).json(products);
}
