import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  let product = await db
    .collection("accessories")
    .findOne({ _id: BSON.ObjectId(req.query.id) });

  if (product === null) {
    product = await db
      .collection("beauty")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }

  if (product === null) {
    product = await db
      .collection("sport")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }

  if (product === null) {
    product = await db
      .collection("weightloss")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }

  if (product === null) {
    product = await db
      .collection("healthanddetox")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }

  if (product === null) {
    product = await db
      .collection("bestsellers")
      .findOne({ _id: BSON.ObjectId(req.query.id) });
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.json(product);
};
