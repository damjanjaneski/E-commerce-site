import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const collection = req.query.collection;

  db.collection(collection)
    .deleteOne({
      _id: BSON.ObjectId(req.body.id),
    })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json(error));
  res.status(200);
  res.end();
};
