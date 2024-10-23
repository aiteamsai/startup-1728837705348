// src/pages/index.tsx

// Client-side Interactive Component
'use client';

import { useState } from 'react';

const NewsletterSignupSection = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // make API call here
    console.log(`Submitting email ${email}`);
    setEmail('');
  };

  return (
    <section className="p-6">
      <h2 className="text-lg font-semibold">Join our Newsletter</h2>
      <form onSubmit={onSubmit} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter your email"
        />
        <button className="ml-2 py-2 px-4 bg-green-500 text-white rounded">Submit</button>
      </form>
    </section>
  );
};

// Server-side Landing Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-100">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to VeganFlow</h1>
        <p className="mt-8 text-xl">Join a dedicated community for vegans to connect, share &amp; learn.</p>
      </section>
      
      <NewsletterSignupSection />
      
      <footer className="border-t p-6 text-center">
        <p>&copy; 2022 VeganFlow, All rights reserved.</p>
      </footer>
    </main>
  );
}
