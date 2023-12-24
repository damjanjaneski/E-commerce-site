export default function Product({ product }) {
  return (
    <>
      <div>{product.name}</div>
      <div>{product.actionPrice}</div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await fetch(`http://localhost:3000/api/allProducts`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));

  const paths = [...products].map((product) => {
    return {
      params: {
        id: product._id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await fetch(
    `http://localhost:3000/api/product?id=${params.id}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      product,
    },
  };
}
