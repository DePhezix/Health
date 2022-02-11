import React from 'react';
import HomeHeaderPremium from '../../components/headers/HomeHeaderPremium'
import styled from 'styled-components';

function HomePagePremium() {
  return (
    <Container>
      <HomeHeaderPremium />
    </Container>
  );
}

export default HomePagePremium;

const Container = styled.div `
  display: flex;
  justify-content: center;
`
