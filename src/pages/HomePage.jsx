import styled from "styled-components";
import HomeHeader from '../components/headers/HomeHeader'
import data from '../information.json'
import {useState} from 'react'

function HomePage() {
    const [popUp, setPopUp] = useState(false);
    const showPopUp = () => setPopUp(true)
    return (
        <>
        <Container>
            <HomeHeader />
            <Wrap>
                <h2>How To Lead A Healthy LifeStyle</h2>
                {data.map((item) => (
                    <Holder style={{margin: item["margin-top"]}}>
                    <div className='holder'>
                        <div className='row'>
                          <div>
                            <img src={item.image} />
                         </div>
                         <div className='details'>
                            <div className='title' style={{marginTop: item["margin-top-text"]}}>
                                <h3>{item.title}</h3>
                            </div>
                                <Description>
                                    <div>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </Description>
                            </div>
                        </div>
                    </div>
                </Holder>
                ))
}
                <ReadMore onClick={showPopUp} >Read More <ion-icon name="caret-down-outline"></ion-icon></ReadMore>
            </Wrap>
        </Container>
        {popUp ? 
            <PopUp>
                <PopUpMain>
                    <IconHolder>
                        <ion-icon name="close-outline" onClick={() => setPopUp(false)}></ion-icon>
                    </IconHolder>
                    <Info>
                        
                    </Info>
                </PopUpMain>
            </PopUp> : null}
        </>
    )
}

export default HomePage

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Wrap = styled.div `
   display: flex;
   flex-direction: column;
   position: relative;
   align-items: center;
   margin-top: 70px;
   width: calc(100% - 4em);
   border-radius: 1em;
   height: 100%;
   background: white;
   overflow-y: hidden;

   h2 {
        margin-top: 5px;
    }
`

const Holder = styled.div `
    margin-top: 50px;
    width: 100%;

    .details {
        height: 150px;
        margin: 0 auto;
        overflow: hidden;
        width: 90%;
        display: flex;
        align-items: center;
        margin-right: 10px;
        
        div>div {
            margin-top: 10px;
        }

        @media (max-width: 720px) {
            margin-top: auto;
        }
    }

    h3 {
        margin-left: 13px;
        width: 100%;
    }

    .title {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        
        @media (max-width: 720px) {
            margin-top: 30px;
        }
    }

    div {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        max-width: 100%;
        max-height: 200px;
        text-align: left;

        img {
            width: 90%;
            max-width: 500px;

            @media (min-width: 720px) {
                margin-left: 10px;
            }
        }

        @media (max-width: 720px) {
            flex-direction: column;
            h3 {
                margin-top: 10px;
            }
            img {
                width: 95%;
                max-width: 6000px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }

    .row {
        display: flex;
        flex-direction: row;
        max-height: 1000px;

        @media (max-width: 720px) {
            flex-direction: column;
        }
    }
`

const Description = styled.div `
    p{
        height: 100px;
    }
`  

const ReadMore = styled.button `
    position: absolute;
    top: 92%;
    width: 100%;
    height: 50px;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(transparent, black);
    border: none;
    color: white;

    ion-icon {
        font-size: 1.3em;
        margin-left: 10px;
        margin-top: 2px;
    }

    &:hover {
        cursor: pointer;
    }
`

const PopUp = styled.div `
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

const PopUpMain = styled.div `
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
`
