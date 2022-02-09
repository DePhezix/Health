import React from 'react';
import styled from 'styled-components';
import SubscriptionHeader from '../components/headers/SubscriptionHeader';
import { Link } from 'react-router-dom';

function SubscriptionPage() {
  return (
      <Container>
          <SubscriptionHeader />
          <Holder>
            <Wrap>
                <div>
                    <ImageHolderBasic />
                    <BasicText src='/basicText.jpeg' />
                    <p>You Are Currently Subscribed To This Plan</p>
                </div>
            </Wrap>
            <Wrap>
                <div>
                    <ImageHolderPremium />
                    <PremiumText src='/premiumText.jpg' />
                    <Link to='/premium'>Upgrade To Premium</Link>
                </div>
            </Wrap>
          </Holder>
      </Container>
  )
}

export default SubscriptionPage;

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Holder = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`

const Wrap = styled.div `
    background: white;
    margin-top: 10px;
    width: 270px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    text-align: center;

    div {
        position: relative;
    }

    p {
        font-size: 12px;
        position: absolute;
        left: 10%;
        top: 97%;
        font-weight: 500;
        color: grey;
        cursor: default;
    }

    a {
        position: absolute;
        text-decoration: none;
        color: white;
        background: #064cff;
        width: 200px;
        padding: 5px 10px;
        border-radius: 1em;
        right: 5%;

        &:hover {
            background: blue;
        }
    }
`

const PremiumText = styled.img `
    position: absolute;
    left: 18%;
    top: 75%;
    width: 150px;
`

const BasicText = styled.img `
    position: absolute;
    left: 23%;
    top: 75%;
    width: 120px;
    height: 40px;
`

const ImageHolderPremium = styled.div `
    overflow: hidden;
    width: 230px;
    height: 150px;
    border-radius: 1em;
    background-image: url('https://media.istockphoto.com/photos/king-crown-symbol-picture-id1299657753?k=20&m=1299657753&s=612x612&w=0&h=QclhZAGKKXG4OJd8D6kM_2TcN8mnBgO77Ch6z9J3MJg=');
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 50px;
`

const ImageHolderBasic = styled(ImageHolderPremium) `
    background-image: url('https://media.istockphoto.com/vectors/bokeh-background-vector-id1073136398?k=20&m=1073136398&s=612x612&w=0&h=NNSuNGqW2Fwr69QACsPmFWT7h8mHr0TJ9ILtvrS5Y_4=')
`
