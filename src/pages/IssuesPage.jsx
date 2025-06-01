import React from 'react';
import Issues from '../components/Issues';
import Stats from '../components/Stats';

const IssuesPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Waste Issues</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Understanding the environmental, health, and resource challenges posed by electronic waste.
          </p>
        </div>
      </div>
      
      <Stats />
      <Issues />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-emerald-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Growing Crisis</h2>
            <p className="text-gray-600 mb-4">
              Electronic waste, or e-waste, refers to discarded electronic devices and equipment. As technology advances and consumer demand for new electronics grows, the lifespan of electronic devices has shortened, leading to a significant increase in e-waste generation globally.
            </p>
            <p className="text-gray-600 mb-4">
              In India, the problem is particularly acute due to the rapid growth of the IT sector, increasing consumer purchasing power, and the import of e-waste from developed countries. The informal sector handles most of the e-waste recycling in India, often using hazardous methods that pose serious health and environmental risks.
            </p>
            <p className="text-gray-600">
              The lack of awareness among consumers about proper e-waste disposal, insufficient infrastructure for collection and processing, and limited enforcement of regulations further exacerbate the problem. Addressing these challenges requires a multi-faceted approach involving government policies, industry responsibility, and individual action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IssuesPage;
