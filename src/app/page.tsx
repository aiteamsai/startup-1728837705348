// app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-green-100">
      <h1 className="text-4xl font-bold text-green-800">
        Welcome to Vegan Social Network!
      </h1>
      <p className="mt-4 text-lg text-green-600">
        Connect with like-minded people and share your vegan journey!
      </p>
    </main>
  );
}
