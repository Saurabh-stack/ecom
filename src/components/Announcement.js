import React from "react";
import styled from "styled-components";

const Containter = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Containter>Supper Deal!! Get 50% off on selected products</Containter>
  );
};

export default Announcement;
