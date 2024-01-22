import clientPromise from "../../../lib/mongodb";

export default async function CartProducts(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const products = await db.collection("cartProducts").find({}).toArray();

  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(products);
}
