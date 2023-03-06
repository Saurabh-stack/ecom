import React from "react";
import styled from "styled-components";

import { popularProducts } from "../dummyData/data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
