'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    // Generate a random wallet ID (you might want to use a more sophisticated method in production)
    const randomId = Math.random().toString(36).substring(2, 15);
    router.push(`/wallet/${randomId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold mb-4">Welcome to Sneaky 👋</h1>
          <p className="text-xl text-muted-foreground">
            Your open-source, privacy-focused Bitcoin wallet for the streets
          </p>
        </div>

        <div className="space-y-6 bg-card rounded-xl p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About This Project</h2>
            <p className="text-muted-foreground">
              Sneaky is built with privacy in mind, helping you manage your Bitcoin without compromising your identity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link 
              href="https://github.com/ATLBitLab/bitcoin-street-ux"
              target="_blank"
              className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full"
            >
              View Source Code
            </Link>
            <Link
              href="https://primal.net/p/npub1nxy56ame2gfnfj6fjylzxwq7r94phvgwt037mmvwr60qsqlaseksswlnxl"
              target="_blank"
              className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full"
            >
              Contact Developer on Nostr
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Have questions? Feel free to reach out to the developer anytime via Nostr!
          </p>
        </div>

        <button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all hover:opacity-90 text-lg"
        >
          Get Started with Sneaky
        </button>
      </main>
    </div>
  );
}
