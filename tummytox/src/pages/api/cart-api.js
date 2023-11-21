import clientPromise from "../../../lib/mongodb";

export default async function (req, res) {
  const client = await clientPromise;
  const db = client.db("tummytox");

  if (req.query.id === "post") {
  } else if (req.query.id === "delete") {
  }
}
