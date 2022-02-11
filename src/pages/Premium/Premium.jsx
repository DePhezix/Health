import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePagePremium from './HomePagePremium';
import SubscriptionPagePremium from './SubscriptionPagePremium'

function Premium() {
  return (
      <Routes>
          <Route path='/' element={<HomePagePremium />} />
          <Route path='/subscription' element={<SubscriptionPagePremium />} />
      </Routes>
  );
}

export default Premium;
