import clientPromise from "../../../lib/mongodb";

export default async function (req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  console.log(req.body.name);

  db.collection("subscribtions")
    .insertOne({
      name: req.body.name,
      email: req.body.email,
    })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
}
