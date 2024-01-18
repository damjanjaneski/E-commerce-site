import clientPromise from "../../../lib/mongodb";

export default async function CartProducts(req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const products = await db.collection("cartProducts").find({}).toArray();

  return res.status(200).json(products);
}
