import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  db.collection("users")
    .insertOne(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
};
