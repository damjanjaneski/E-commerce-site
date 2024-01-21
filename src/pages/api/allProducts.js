export default async (req, res) => {
  let allProducts = [];

  const bestsellers = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/bestsellers`
  ).then((res) => res.json());

  const accessories = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/productsList?collection=accessories`
  ).then((res) => res.json());

  const healthAndDetox = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/productsList?collection=healthanddetox`
  ).then((res) => res.json());

  const weightloss = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/productsList?collection=weightloss`
  ).then((res) => res.json());

  const sport = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/productsList?collection=sport`
  ).then((res) => res.json());

  const beauty = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/productsList?collection=beauty`
  ).then((res) => res.json());

  allProducts.push(
    ...bestsellers,
    ...accessories,
    ...healthAndDetox,
    ...weightloss,
    ...sport,
    ...beauty
  );

  return allProducts;
};
