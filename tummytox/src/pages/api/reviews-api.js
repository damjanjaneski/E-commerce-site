import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const reviews = await db.collection("reviews").find({}).toArray();

  return res.json(reviews);
};
