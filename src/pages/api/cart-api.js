import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const user = await db
    .collection("users")
    .findOne({ _id: ObjectId(req.query.userId) });

  return res.status(200).json(user.cart);
};
