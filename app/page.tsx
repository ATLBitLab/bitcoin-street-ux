'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    // Generate a random wallet ID (you might want to use a more sophisticated method in production)
    const randomId = Math.random().toString(36).substring(2, 15);
    router.push(`/wallet/${randomId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">Sneaky</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          your super secret bitcoin wallet
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
