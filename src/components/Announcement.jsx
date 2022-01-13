import styled from "styled-components";
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: #022727;
    color:white;
    display: flex;
    align-items: center;
    font-size: 15px;
    justify-content: center;
    font-weight: 500;
`
const Announcement = () => {
    return (
        <Container>
            Super deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcement
