import clientPromise from "../../../lib/mongodb";

export default async function (req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const bestsellers = await db.collection("bestsellers").find({}).toArray();

  res.status(200).json(bestsellers);
}
