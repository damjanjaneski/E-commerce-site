import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  if (req.body.category.toLowerCase() === "accessories") {
    db.collection("accessories")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else if (req.body.category.toLowerCase() === "sport") {
    db.collection("sport")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else if (req.body.category.toLowerCase() === "beauty") {
    db.collection("beauty")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else if (
    req.body.category.toLowerCase().replaceAll(" ", "") === "weightloss"
  ) {
    db.collection("weightloss")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } else if (
    req.body.category.toLowerCase().replaceAll(" ", "") === "healthanddetox"
  ) {
    console.log("ane");
    db.collection("healthanddetox")
      .insertOne(req.body)
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end();
};
