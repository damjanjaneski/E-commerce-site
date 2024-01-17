import clientPromise from "../../lib/mongodb";

export default async function getProductsList(collectionName) {
  const client = await clientPromise;
  const db = client.db("tummytox");
  const collection = collectionName;

  const products = await db.collection(collection).find({}).toArray();

  return products;
}
