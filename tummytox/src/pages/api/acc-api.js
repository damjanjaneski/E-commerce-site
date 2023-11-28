// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  // db.collection("accessories").insertMany(acc);
  const products = await db.collection("accessories").find({}).toArray();

  return res.status(200).json(products);
}
