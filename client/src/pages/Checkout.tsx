import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Checkout functionality will be implemented with Stripe integration.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
