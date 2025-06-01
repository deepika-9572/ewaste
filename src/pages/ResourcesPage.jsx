import React from 'react';
import CollectionPoints from '../components/CollectionPoints';
import RecyclingPartners from '../components/RecyclingPartners';
import SustainablePractices from '../components/SustainablePractices';

const ResourcesPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-Waste Resources</h1>
          <p className="text-xl max-w-3xl mx-auto text-emerald-100">
            Collection centers, recycling partners, and sustainable practices for responsible e-waste management.
          </p>
        </div>
      </div>
      
      <CollectionPoints />
      <RecyclingPartners />
      <SustainablePractices />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-emerald-50 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">E-Waste Management Tips</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Extend Device Lifespan</h3>
                  <p className="text-gray-600">
                    Regular maintenance, timely updates, and proper care can significantly extend the useful life of your electronic devices, reducing the frequency of disposal.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Consider Repair Before Replacement</h3>
                  <p className="text-gray-600">
                    When a device malfunctions, explore repair options before deciding to replace it. Many issues can be fixed at a fraction of the cost of a new device.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Donate or Sell Functional Devices</h3>
                  <p className="text-gray-600">
                    If you're upgrading to a new device but your old one still works, consider donating it to schools, non-profits, or selling it to extend its useful life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Use Authorized Collection Centers</h3>
                  <p className="text-gray-600">
                    Always dispose of e-waste through authorized collection centers or manufacturer take-back programs to ensure environmentally sound processing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Data Before Disposal</h3>
                  <p className="text-gray-600">
                    Before disposing of devices containing personal data, ensure all information is securely erased to protect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
