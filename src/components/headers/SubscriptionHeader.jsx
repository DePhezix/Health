import { Link } from "react-router-dom";
import styled from "styled-components";

function SubscriptionHeader() {
    return (
        <Navigation>
<div style={{marginLeft: '10px'}}>
  <ul>
    <List>
      <Link to='/'>
        <Icon>
          <ion-icon name="home-outline"></ion-icon>
        </Icon>
        <Text>
          Home
        </Text>
      </Link>
    </List>
  </ul>
</div>
<DivSecond>
  <ul>
    <List>
      <Link to='/credit'>
        <Icon>
          <ion-icon name="chatbox-outline"></ion-icon>
        </Icon>
        <Text>
          Credit
        </Text>
      </Link>
    </List>
  </ul>
  <ul>
    <List className='active'>
      <a>
        <Icon>
          <ion-icon name="cash-outline"></ion-icon>
        </Icon>
        <Text>
          Subscription
        </Text>
        <Indicator />
      </a>
    </List>
  </ul>
</DivSecond>
</Navigation>
    )
}

export default SubscriptionHeader;


const Navigation = styled.div `
  width: calc(100vw - 4em);
  height: 70px;
  background: white;
  border-radius: 1em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  ul {
    display: flex;
    width: 200px;
    vertical-align: baseline;

    @media (max-width: 768px) {
      width: 300px;
    }

    @media (max-width: 600px) {
      width: 100px;
    }

    .active {
      cursor: default;
      span {
          transform: translateY(-10px);
          cursor: default;
        }
        p {
          opacity: 1;
          transform: translateY(10px);
          cursor: default;
        }
    }

    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 50px;
      }

      &:hover{
        span {
          transform: translateY(-10px)
        }
        p {
          opacity: 1;
          transform: translateY(10px;)
        }
      }

      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`

const List = styled.li ``

const Icon = styled.span `
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.75em;
  text-align: center;
  transition: 0.5s;
  color: #222327;
  cursor: pointer;
`

const Text = styled.p `
  position: absolute;
  color: #222327;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(10px);
  cursor: pointer;
`

const DivSecond = styled.div `
  display: flex;
  justify-content: space-between;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px
  }
`

const Indicator = styled.div `
  position: absolute;
  top: -10%;
  left: -25%;
  height: 80px;
  width: 120px;
  z-index: -1;
  background: #29fd53;
  border-radius: 200px 0px 200px 0px;
  -moz-border-radius: 200px 0px 200px 0px;
  -webkit-border-radius: 200px 0px 200px 0px;
  border: 0px solid #000000;
  border: 6px solid #222327;

  @media (max-width: 768px) {
    width: 120px;
    left: -50%;
  }
`