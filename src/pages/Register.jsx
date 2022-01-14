import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;  
    background:linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.5)) ,url('https://st4.depositphotos.com/16122460/19903/i/1600/depositphotos_199033074-stock-photo-rack-rainbow-clothes-color-background.jpg') ;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding:20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: bold;
`
const Register = () => {
    return (
        <Container>
         <Wrapper>
             <Title>CREATE AN ACCOUNT</Title>
             <Form>
                 <Input placeholder="Name"/>
                 <Input placeholder="Last Name"/>
                 <Input placeholder="UserName"/>
                 <Input placeholder="Email"/>
                 <Input placeholder="Password"/>
                 <Input placeholder="Confirm Password"/>          
             <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
             </Agreement>
             <Button>CREATE</Button>
             </Form>
         </Wrapper>
        </Container>
    )
}

export default Register
