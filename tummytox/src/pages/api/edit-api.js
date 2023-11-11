import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  db.collection("accessories")
    .updateOne(
      { _id: BSON.ObjectId(req.query.id) },
      {
        $set: {
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
          actionPrice: req.body.actionPrice,
          description: req.body.description,
          img: req.body.img,
        },
      }
    )
    .then((res) => res.status(200).json("successfuly edited"))
    .catch((err) => res.status(500).json(err));

  console.log(req.body);
};
