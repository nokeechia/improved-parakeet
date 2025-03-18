'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./components/ImageModal";

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-10xl mx-auto">
        <h1 className="text-7xl font-bold mb-8">Welcome to the ISP Developer Interview Process</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interview Process Overview</h2>
          <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">1. Overview</h3>
              <p className="text-gray-600 dark:text-gray-300">This is a simple trading system that allows you to view trades and assign operators and traders to trades.</p>
              <p className="text-gray-600 dark:text-gray-300">The system is built with React with Next.js, Tailwind CSS, and TypeScript.</p>
              <p className="text-gray-600 dark:text-gray-300">The real system allows an end user:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Login</li>
                <li className="text-gray-600 dark:text-gray-300">Enter a trade</li>
                <li className="text-gray-600 dark:text-gray-300">Update trades</li>
                <li className="text-gray-600 dark:text-gray-300">View trades</li>
                <li className="text-gray-600 dark:text-gray-300">(Re)Validate trades</li>
                <li className="text-gray-600 dark:text-gray-300">Assign an operator and trader to a trade</li>
                <li className="text-gray-600 dark:text-gray-300">Send trades to the central banking system via API</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">2. Technical Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">Review of your coding skills and problem-solving abilities through practical exercises.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">3. System Design Discussion</h3>
              <p className="text-gray-600 dark:text-gray-300">Discussion about architecture decisions and scalability considerations.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">4. Trading Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">Assessment of your understanding of trading concepts and market mechanics.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Views</h2>
          <div className="space-y-4">
            <Link 
              href="/operations"
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Operations View →</h3>
              <p className="text-gray-600 dark:text-gray-300">View and manage trading operations and transactions.</p>
            </Link>
            <div 
              className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer group"
              onClick={() => setIsImageModalOpen(true)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <span className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">Click to expand</span>
              </div>
              <Image
                src="/operations.png"
                alt="Operations View Screenshot"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">1. Operations View →</h3>
              <p className="text-gray-600 dark:text-gray-300">Build a page that displays a list of trades and allows you to assign an operator to a trade.</p>
              <p className="text-gray-600 dark:text-gray-300">Use the following API endpoints to fetch data:</p>
              <p className="text-gray-600 dark:text-gray-300">GET /api/v1/trades (returns a list of trades example: <a href="/data/trade.json" target="_blank" rel="noopener noreferrer">trade.json</a>)</p>
              <p className="text-gray-600 dark:text-gray-300">GET /api/v1/users (returns a list of users example: <a href="/data/user.json" target="_blank" rel="noopener noreferrer">user.json</a>)</p>
          </div>
          <br />
          <div className="space-y-4 py-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">3. System Design Discussion →</h3>
              <p className="text-gray-600 dark:text-gray-300">Discuss the architecture of the system and the scalability considerations.</p>
              <p className="text-gray-600 dark:text-gray-300">Consider the following:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">How would you design a new API endpoint to fetch trades by user?</li>
                <li className="text-gray-600 dark:text-gray-300">How would you update the existing API endpoint to fetch trades by user?</li>
                <li className="text-gray-600 dark:text-gray-300">How would you design a new API endpoint to fetch trades by operator?</li>
                <li className="text-gray-600 dark:text-gray-300">How would you design a new API endpoint to update the assigned operator for a trade?</li>
                <li className="text-gray-600 dark:text-gray-300">How would you design a new API endpoint to update the assigned trader user for a trade?</li>
                <li className="text-gray-600 dark:text-gray-300">Are there any logical separations you can see with the different operation view use cases?</li>
              </ul>
            </div>
          </div>
          <br />
          <div className="space-y-4 py-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">4. Trading Knowledge →</h3>
              <h4 className="text-gray-600 dark:text-gray-300">Consideratiions:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">The first system is built on the consideration that an end user is entrying the data in by hand.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">What kind of validations would you like a system such as this to have?</p>
            </div>
          </div>
        </div>
      </main>

      {isImageModalOpen && (
        <ImageModal
          src="/operations.png"
          alt="Operations View Screenshot"
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </div>
  );
}
