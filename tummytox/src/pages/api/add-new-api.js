import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  if (req.body.category === "Accessories") {
    db.collection("accessories")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }
};
