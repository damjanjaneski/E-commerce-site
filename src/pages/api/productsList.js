import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");
  const collection = req.query.collection;

  const products = await db.collection(collection).find({}).toArray();

  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(products);
}
