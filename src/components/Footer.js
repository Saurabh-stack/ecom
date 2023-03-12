import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainter = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const ContactIcon = styled.span`
  color: teal;
  margin-bottom: 5px;
`;
const ContactText = styled.span`
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOM</Logo>
        <Description>
          This is Practice Ecom website developed with moto of learning in react
          js. This site can be used to demo ecommerce user end platform
        </Description>
        <SocialContainter>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest></Pinterest>
          </SocialIcon>
        </SocialContainter>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactIcon>
            <Room />
          </ContactIcon>
          <ContactText>
            6033, Ecommerce Universer,
            <p>middle east, Bangalore - 560102</p>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Phone />
          </ContactIcon>
          <ContactText>+91-00 00 00 00 00</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <Email />
          </ContactIcon>
          <ContactText>query@dummyMail.com</ContactText>
        </ContactItem>
        <Payment src="https://i0.wp.com/xpressionbd.com/wp-content/uploads/2018/12/We-Accept.png?w=1417&ssl=1" />
      </Right>
    </Container>
  );
};

export default Footer;
