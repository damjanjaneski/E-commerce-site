import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("tummytox");

  let allProducts = [];

  const bestsellers = await fetch("http://localhost:3000/api/bestsellers").then(
    (res) => res.json()
  );

  const accessories = await fetch(
    "http://localhost:3000/api/productsList?collection=accessories"
  ).then((res) => res.json());

  const healthAndDetox = await fetch(
    "http://localhost:3000/api/productsList?collection=healthAndDetox"
  ).then((res) => res.json());

  const weightloss = await fetch(
    "http://localhost:3000/api/productsList?collection=weightloss"
  ).then((res) => res.json());

  const sport = await fetch(
    "http://localhost:3000/api/productsList?collection=sport"
  ).then((res) => res.json());

  const beauty = await fetch(
    "http://localhost:3000/api/productsList?collection=beauty"
  ).then((res) => res.json());

  allProducts.push(
    ...bestsellers,
    ...accessories,
    ...healthAndDetox,
    ...weightloss,
    ...sport,
    ...beauty
  );

  return res.json(allProducts);
};
