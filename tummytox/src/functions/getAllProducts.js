import getBestsellers from "./getBestsellers";
import getProductsList from "./getProductsList";

export default async function getAllProducts() {
  let allProducts = [];

  const bestsellers = await getBestsellers().then((res) => res);

  const accessories = await getProductsList("accessories").then((res) => res);

  const healthAndDetox = await getProductsList("healthanddetox").then(
    (res) => res
  );

  const weightloss = await getProductsList("weightloss").then((res) => res);

  const sport = await getProductsList("sport").then((res) => res);

  const beauty = await getProductsList("beauty").then((res) => res);

  allProducts.push(
    ...bestsellers,
    ...accessories,
    ...healthAndDetox,
    ...weightloss,
    ...sport,
    ...beauty
  );

  return allProducts;
}
