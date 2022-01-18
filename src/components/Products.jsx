import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { publishRequest } from "../config";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await publishRequest.get(
        cat ? `/api/product?category=${cat}` : `/api/product`
      );

      setProducts(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    getProducts(); // call function
  }, [cat]);
  useEffect(() => {
    if (filters && filters.color !== "All") {
      cat &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product product={product} key={product._id} />)}
    </Container>
  );
};

export default Products;
