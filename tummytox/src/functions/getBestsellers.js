import clientPromise from "../../lib/mongodb";

export default async function getBestsellers() {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const bestsellers = await db.collection("bestsellers").find({}).toArray();

  return bestsellers;
}
