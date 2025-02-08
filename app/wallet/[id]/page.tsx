'use client';

import { FC, useEffect, useState } from 'react';
import { use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const WalletPage: FC<PageProps> = ({ params }) => {
  const { id } = use(params);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Load balance from localStorage on component mount
    const savedBalance = localStorage.getItem(`wallet-${id}`);
    if (savedBalance) {
      setBalance(parseInt(savedBalance));
    }
  }, [id]);

  const handleReceiveFaucet = () => {
    const newBalance = balance + 100;
    setBalance(newBalance);
    localStorage.setItem(`wallet-${id}`, newBalance.toString());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Wallet ID: {id}</h1>
        <div className="text-center mb-6">
          <p className="text-gray-500 dark:text-gray-400">Current Balance</p>
          <p className="text-4xl font-bold">{balance} sats</p>
        </div>
        <button
          onClick={handleReceiveFaucet}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Receive Bitcoin from Faucet
        </button>
      </div>
    </div>
  );
};

export default WalletPage; 