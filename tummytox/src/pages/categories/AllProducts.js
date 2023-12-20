import { useState, useEffect } from "react";
import ProductCard from "../../../components/Card";
import { Grid } from "@mui/material";
import styles from "../../styles/AllProducts.module.css";
import Pagination from "../../../components/Pagination";

export default function AllProducts({
  trigger,
  setTrigger,
  cartProducts,
  setCartProducts,
  likedProducts,
  setLikedProducts,
  setActiveCategory,
  userType,
  formatNumber,
}) {
  const [allProducts, setAllProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [sortAndFilter, setSortAndFilter] = useState({
    sortBy: "Not sorted",
    filter: "No filter",
  });

  setActiveCategory("All Products");

  useEffect(() => {
    fetch("http://localhost:3000/api/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const page = JSON.parse(localStorage.getItem("activePage") || 1);
      setActivePage(page);
    }
  }, []);

  const onPageChange = (num) => {
    setActivePage(num);
    localStorage.setItem("activePage", JSON.stringify(num));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let sorted;

  if (sortAndFilter.sortBy === "Not sorted") {
    sorted = allProducts;
  } else if (sortAndFilter.sortBy === "lowest") {
    sorted = allProducts.slice().sort((a, b) => {
      const priceA = a.actionPrice;
      const priceB = b.actionPrice;

      return priceA - priceB;
    });
  } else if (sortAndFilter.sortBy === "highest") {
    sorted = allProducts.slice().sort((a, b) => {
      const priceA = a.actionPrice;
      const priceB = b.actionPrice;

      return priceB - priceA;
    });
  } else if (sortAndFilter.sortBy === "A-Z") {
    sorted = allProducts.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return nameA.localeCompare(nameB);
    });
  } else if (sortAndFilter.sortBy === "Z-A") {
    sorted = allProducts.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return nameB.localeCompare(nameA);
    });
  }

  let filtered;

  if (sortAndFilter.filter === "1") {
    filtered = sorted.filter((product) => product.actionPrice <= 300);
  } else if (sortAndFilter.filter === "2") {
    filtered = sorted.filter(
      (product) => product.actionPrice > 300 && product.actionPrice <= 600
    );
  } else if (sortAndFilter.filter === "3") {
    filtered = sorted.filter(
      (product) => product.actionPrice > 600 && product.actionPrice <= 900
    );
  } else if (sortAndFilter.filter === "4") {
    filtered = sorted.filter(
      (product) => product.actionPrice > 900 && product.actionPrice <= 1200
    );
  } else if (sortAndFilter.filter === "5") {
    filtered = sorted.filter((product) => product.actionPrice > 1200);
  } else filtered = sorted;

  let newArray = [];

  for (let i = 0; i < filtered.length; i += 6) {
    let subArr = filtered.slice(i, i + 6);

    newArray.push(subArr);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSortAndFilter({ ...sortAndFilter, [name]: value });
    setActivePage(1);
    localStorage.setItem("activePage", JSON.stringify(1));
  };

  const productsListed = newArray.flatMap((x) => x).length;

  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.filterWraper}>
        <div className={styles.filter}>
          <label>Sort by:</label>
          <select
            name="sortBy"
            value={sortAndFilter.sortBy}
            onChange={handleChange}
          >
            <option value="Not sorted">Not sorted</option>
            <option value="lowest">Price - lowest first</option>
            <option value="highest">Price - highest first</option>
            <option value="A-Z">Product name (A-Z)</option>
            <option value="Z-A">Product name (Z-A)</option>
          </select>
        </div>
        <div className={styles.filter}>
          <label>Filter:</label>
          <select
            name="filter"
            value={sortAndFilter.filter}
            onChange={handleChange}
          >
            <option value="No filter">No filter</option>
            <option value={1}>0 - 300.00 MKD</option>
            <option value={2}>301.00 - 600.00 MKD</option>
            <option value={3}>601.00 - 900.00 MKD</option>
            <option value={4}>901.00 - 1200.00 MKD</option>
            <option value={5}>Above 1.200.00 MKD</option>
          </select>
        </div>
      </div>
      <h1 className={styles.title}>All Products</h1>
      <Grid container>
        <div className={styles.container}>
          {userType === "admin" ? (
            <button
              onClick={() => {
                router.push("/admin/add-new");
              }}
              className={styles.addNew}
            >
              Add new
            </button>
          ) : (
            ""
          )}
          {sorted.length !== 0
            ? newArray[activePage - 1].map((product, x) => (
                <ProductCard
                  formatNumber={formatNumber}
                  collection={product.category}
                  trigger={trigger}
                  setTrigger={setTrigger}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  setLikedProducts={setLikedProducts}
                  likedProducts={likedProducts}
                  key={x}
                  product={product}
                />
              ))
            : undefined}
        </div>
      </Grid>
      <Pagination
        pages={Math.ceil(newArray.length)}
        activePage={activePage}
        onPageChange={onPageChange}
      />
      <div className={styles.productsShown}>
        {activePage === 1 ? (
          productsListed > 6 ? (
            <p>1-6 of {productsListed}</p>
          ) : (
            <p>
              1-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
        {activePage === 2 ? (
          productsListed > 12 ? (
            <p>7-12 of {productsListed}</p>
          ) : (
            <p>
              7-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
        {activePage === 3 ? (
          productsListed > 18 ? (
            <p>13-18 of {productsListed}</p>
          ) : (
            <p>
              12-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
        {activePage === 4 ? (
          productsListed > 24 ? (
            <p>19-24 of {productsListed}</p>
          ) : (
            <p>
              18-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
        {activePage === 5 ? (
          productsListed > 30 ? (
            <p>25-30 of {productsListed}</p>
          ) : (
            <p>
              25-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
        {activePage === 6 ? (
          productsListed > 36 ? (
            <p>31-36 of {productsListed}</p>
          ) : (
            <p>
              31-{productsListed} of {productsListed}
            </p>
          )
        ) : undefined}
      </div>
    </div>
  );
}
