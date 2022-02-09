import styled from "styled-components";
import HomeHeader from '../components/headers/HomeHeader'

function HomePage() {
    return (
        <Container>
            <HomeHeader />
        </Container>
    )
}

export default HomePage

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`