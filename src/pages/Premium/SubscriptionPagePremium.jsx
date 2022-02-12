import React, {useState} from 'react';
import styled from 'styled-components';
import SubscriptionHeaderPremium from '../../components/headers/SubscriptionHeaderPremium';
import {Link} from 'react-router-dom'

function SubscriptionPagePremium() {
    const [premiumPopUp, setPremiumPopUp] = useState(false);
    const showPopUp = () => setPremiumPopUp(true);
    const hidePopUp = () => setPremiumPopUp(false);  
  return (
      <>
        <Container>
            <SubscriptionHeaderPremium />
            <Holder>
                    <BasicHolder>
                        <Wrap>
                            <div>
                                <ImageHolderBasic />
                                <BasicText src='/basicText.jpeg' />
                                <a onClick={showPopUp}> Downgrade To Basic </a>
                            </div>
                        </Wrap>
                        <Perks>
                            <h5>Perks Of This Subscription</h5>
                            <span>Access To Limited Information on how to improve your health for free</span>
                        </Perks>
                    </BasicHolder>
                <PremiumHolder>
                    <WrapPremium>
                        <div>
                            <ImageHolderPremium />
                            <PremiumText src='/premiumText.jpg' />
                            <p>You Are Currently Subscribed To This Plan</p>
                        </div>
                    </WrapPremium>
                    <PerksPremium>
                        <h5>Perks Of This Subscription</h5>
                        <span>Access To All Features Currently Available</span>
                    </PerksPremium>
                </PremiumHolder>
            </Holder>
        </Container>
        {premiumPopUp ? 
        <PremiumPopUp>
            <PopUp>
                <IconHolder>
                    <ion-icon name="close-outline" onClick={hidePopUp}></ion-icon>
                </IconHolder>
                <Info>
                    <div>
                        <h3>
                            Are You Sure You Want To Downgrade To Basic?
                        </h3>
                    </div>
                    <BasicDowngrade to='/'>Downgrade To Basic</BasicDowngrade>
                </Info>
            </PopUp>
        </PremiumPopUp> : null}
    </>
  )
}

export default SubscriptionPagePremium;

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
    position: relative;

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
        cursor: pointer;

        &:hover {
            background: blue;
        }
    }
`

const Perks = styled.div `
 width: 150px;
 height: 240px;
 position: absolute;
 background: silver;
 color: white;
 padding: 3px 10px;
 display: flex;
 flex-direction: column;
 border-radius: 1em;
 top: 4%;
 z-index: -1;
 text-align: center;
 transition: 1s ease-in-out;

 @media (max-width: 800px) {
     right: 6%;
     top: 46%; 
     width: 230px;
     height: 80px;
     display: flex;
 }

 @media (max-width: 550px) {
     right: 6%;
     top: 99%; 
     width: 230px;
     height: 60px;
     display: flex;
 }

 h5 {
     margin-bottom: 10px;
 }

 span {
     font-size: 12px;
 }
`

const PerksPremium = styled(Perks) ``

const PremiumText = styled.img `
    position: absolute;
    left: 18%;
    top: 75%;
    width: 150px;
`

const PremiumHolder = styled.div `
    position: relative;
    &:hover {
        ${PerksPremium} {
            transform: translateX(270px);

            @media (max-width: 800px) {
                transform: translateX(0px);
            }
        }
    }
`

const BasicHolder = styled.div `
    position: relative;
    height: 600px;

    @media (max-width: 600px) {
        height: 280px;
    }

    &:hover {
        ${Perks} {
                transform: translateX(270px);

                @media (max-width: 800px) {
                    transform: translateX(0px);
                }
            }
        }
    }
`

const WrapPremium = styled(Wrap) `
    @media(max-width: 550px) {
        margin-top: 70px;
    }
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
    background-image: url('https://media.istockphoto.com/vectors/bokeh-background-vector-id1073136398?k=20&m=1073136398&s=612x612&w=0&h=NNSuNGqW2Fwr69QACsPmFWT7h8mHr0TJ9ILtvrS5Y_4=');
`

const PremiumPopUp = styled.div `
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 1000px;
    z-index: 1000;
    position: absolute;
    display: flex;
    justify-content: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const PopUp = styled.div `
    background: white;
    width: 400px;
    height: 300px;
    position: fixed;
    border-radius: 1em;
    top: 20%;
`

const IconHolder = styled.div `
    width: 100%;
    height: 10px;
    font-size: 1.75em;
    color: #222327;
    display: flex;
    justify-content: flex-end;

    ion-icon {
        cursor: pointer;
        margin-right: 10px;
        margin-top: 10px;
    }
`



const Info = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
    margin-left: 10px;
    position: relative;

    div {
        display: flex;
        justify-content: center;
    }

    h3 {
        color: red;
        text-align: center;
        width: 350px;
    }
`

const BasicDowngrade = styled(Link) `
    text-decoration: none;
    color: white;
    background: #064cff;
    width: 250px;
    padding: 5px 10px;
    border-radius: 1em;
    position: absolute;
    top: 15%;
    left: 3%;
    cursor: pointer;
    margin-top: 130px;
    margin-left: 57px;
    text-align: center;
    font-size: 1em;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: blue;
    }  
`