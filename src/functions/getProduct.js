import clientPromise from "../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async function getProduct(id) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  let product = await db
    .collection("accessories")
    .findOne({ _id: BSON.ObjectId(id) });

  if (product === null) {
    product = await db.collection("beauty").findOne({ _id: BSON.ObjectId(id) });
  }

  if (product === null) {
    product = await db.collection("sport").findOne({ _id: BSON.ObjectId(id) });
  }

  if (product === null) {
    product = await db
      .collection("weightloss")
      .findOne({ _id: BSON.ObjectId(id) });
  }

  if (product === null) {
    product = await db
      .collection("healthanddetox")
      .findOne({ _id: BSON.ObjectId(id) });
  }

  if (product === null) {
    product = await db
      .collection("bestsellers")
      .findOne({ _id: BSON.ObjectId(id) });
  }

  return product;
}
