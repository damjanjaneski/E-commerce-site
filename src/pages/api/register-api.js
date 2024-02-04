import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  db.collection("users")
    .insertOne({ ...req.body, wishlist: [], cart: [] })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
  res.end();
};
