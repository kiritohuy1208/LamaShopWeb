import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
    `
const Info = styled.div`
    position: absolute;
    top: 0;
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border:none;
    padding:15px;
    background-color: white;
    color:gray;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
`
const CategoriesItem = ({category}) => {
    return (
        <Container>        
            <Image src={category.img}/>
            <Info>
                <Title>{category.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem
