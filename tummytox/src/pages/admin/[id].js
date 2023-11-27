import styles from "./[id].module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EdicCard({ product }) {
  const [edited, setEdited] = useState({ ...product });
  const router = useRouter();

  const handleChange = function (e) {
    const { name, value } = e.target;

    setEdited({ ...edited, [name]: value });
  };

  const edit = function () {
    if (
      edited.name !== "" &&
      edited.category !== "" &&
      edited.price !== "" &&
      edited.actionPrice !== "" &&
      edited.description !== "" &&
      edited.img !== ""
    ) {
      fetch(`http://localhost:3000/api/edit-api?id=${product._id}`, {
        method: "PUT",
        body: JSON.stringify(edited),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => console.log("successful"))
        .catch((e) => console.log(e));
    }

    router.push("/categories/Accessories");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please fill the product form</h1>
      <input
        name="name"
        value={edited.name}
        placeholder="Name"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        name="category"
        value={edited.category}
        placeholder="Category"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        name="price"
        value={edited.price}
        placeholder="Price"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        name="actionPrice"
        value={edited.actionPrice}
        placeholder="Action price"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        name="description"
        value={edited.description}
        placeholder="Description"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        name="img"
        value={edited.img}
        placeholder="Picture URL"
        className={styles.input}
        onChange={handleChange}
      />
      <button onClick={edit} className={styles.btn}>
        Edit product
      </button>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetch("http://localhost:3000/api/acc-api")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));

  const paths = products.map((product) => {
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
