import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;  
    background:linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)) ,url('https://virtualbackgrounds.site/wp-content/uploads/2021/02/womens-clothing-store-1536x864.jpg') ;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding:20px;
    background-color: teal;
    color:white;
    ${mobile({width:"75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: orange;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
             <Wrapper>
             <Title>SIGN IN</Title>
             <Form>            
                 <Input placeholder="UserName"/>
                 <Input placeholder="Password"/>      
                 <Button>LOGIN</Button>
                 <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                 <Link>CREATE A NEW ACCOUNT</Link>
             </Form>
         </Wrapper>
        </Container>
    )
}

export default Login
