import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 50vh;
  margin: 5px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Info>
        <Image src={item.img} alt="test" />
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
