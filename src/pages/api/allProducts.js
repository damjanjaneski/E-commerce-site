export default async (req, res) => {
  let allProducts = [];

  if (process.env.NEXT_PUBLIC_API_URL === "http://localhost:3000") {
    const bestsellers = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/bestsellers`
    ).then((res) => res.json());

    const accessories = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=accessories`
    ).then((res) => res.json());

    const healthAndDetox = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=healthanddetox`
    ).then((res) => res.json());

    const weightloss = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=weightloss`
    ).then((res) => res.json());

    const sport = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=sport`
    ).then((res) => res.json());

    const beauty = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=beauty`
    ).then((res) => res.json());

    allProducts.push(
      ...bestsellers,
      ...accessories,
      ...healthAndDetox,
      ...weightloss,
      ...sport,
      ...beauty
    );

    return res.status(200).json(allProducts);
  }
};
