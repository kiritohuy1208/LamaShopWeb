import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 2rem;
    font-weight: 300;
`
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely update your favorite products</Desc>
            <InputContainer>
                <Input placeholder='Your Email'></Input>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
