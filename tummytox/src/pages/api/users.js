import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const users = await db.collection("users").find({}).toArray();

  return res.json(users);
};
