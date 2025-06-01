import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Issues from '../components/Issues';
import SustainablePractices from '../components/SustainablePractices';
import AwarenessCampaigns from '../components/AwarenessCampaigns';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Issues />
      <SustainablePractices />
      <AwarenessCampaigns />
    </div>
  );
};

export default Home;
