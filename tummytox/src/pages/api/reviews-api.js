import clientPromise from "../../../lib/mongodb";
import { BSON } from "mongodb/lib/core";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  const reviews = await db.collection("reviews").find({}).toArray();

  if (req.query.product) {
    const user = await db
      .collection("users")
      .findOne({ _id: BSON.ObjectId(req.query.userId) });

    db.collection("reviews").insertOne({
      name: user.fullName,
      product: req.query.product,
      text: req.query.text,
      rating: req.query.rating,
      img: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    });
  }

  return res.json(reviews);
};
