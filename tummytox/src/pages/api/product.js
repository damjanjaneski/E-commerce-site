import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  debugger;
  let product = await db
    .collection("accessories")
    .findOne({ _id: BSON.ObjectId(req.query.id) });

  if (product === null) {
    product = await db
      .collection("bestsellers")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }
  return res.json(product);
};
