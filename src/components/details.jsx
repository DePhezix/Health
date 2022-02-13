import React from 'react';
import styled from 'styled-components';

function Details( Image, Title, Descript ) {
  return (
    <Holder>
        <div className='holder'>
            <div className='row'>
              <div>
                <img src={Image} alt='' />
             </div>
             <div className='details'>
                <div className='title'>
                    <h3>{Title}</h3>
                </div>
                    <Description>
                        <div>
                            <p>
                                {Descript}
                            </p>
                        </div>
                    </Description>
                </div>
            </div>
        </div>
    </Holder>
  );
}

export default Details;

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
    }

    div {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        max-width: 100%;
        max-height: 200px;

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