import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../responsive';
const Container = styled.div`
    display: flex;
    background-color: black;
    ${mobile({ flexDirection:"column"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo =styled.h1`
      color:white;
`
const Desc =styled.p`
    margin: 20px 0px;
    color:white;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;      
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props=>props.color};
    margin-right:20px ;
    cursor: pointer;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
    color:white;
`
const List = styled.ul`
    color:white;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
 
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor:"teal" })}
   
`
const ContactItem = styled.div`
     display: flex;
     color:white;
     margin-bottom: 10px;
     align-items: center;
   
`
const Payment = styled.img`
    width:50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>QHShop</Logo>
                <Desc> There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                   <RoomIcon style={{marginRight:"10px",color:"red"}}/>
                    346/AQ, Ba Tri, Bến Tre
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:"10px",color:"#47db37"}}/>
                    (+84) 382452583
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:"10px",color:"orange"}}/>
                    quanghuybtre2@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
