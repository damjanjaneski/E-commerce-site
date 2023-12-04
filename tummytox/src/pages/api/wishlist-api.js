import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const user = await db
    .collection("users")
    .findOne({ _id: BSON.ObjectId(req.query.userId) });

  return res.json(user.wishlist);
};
