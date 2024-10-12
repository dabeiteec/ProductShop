import React from 'react';

export const OrderSummary = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Order summary</h2>
            <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$27.44</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$3.99</span>
            </div>
            <div className="flex justify-between mb-4">
                <span>Tax</span>
                <span>$2.00</span>
            </div>
            <div className="flex justify-between font-semibold mb-6">
                <span>Total</span>
                <span>$33.43</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md flex items-center justify-center">
                Continue to payment
                <span className="ml-2">→</span>
            </button>
        </div>
    );
};
