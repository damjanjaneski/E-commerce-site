import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  if (req.query.request === "post") {
    db.collection("wishlist")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else if (req.query.request === "delete") {
    console.log(req.query.id);

    db.collection("wishlist")
      .deleteOne({ _id: req.query.id })
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }
};
