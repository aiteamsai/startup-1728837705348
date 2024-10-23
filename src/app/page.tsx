// src/app/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import moment from 'moment';

// CSS styling managed in respective component
import 'tailwindcss/tailwind.css';

// Server Component which can fetch the necessary data
export default function VeganNetwork({ welcomeMessage }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">Welcome to Vegan Network</h1>
        <p className="mt-3 text-2xl">
          Connect, share plant-based recipes, and recommend vegan-friendly restaurants. Discover your vegan community.
        </p>

        <div className="mt-8">
          <button className="px-5 py-3 font-bold text-white bg-green-500 rounded hover:bg-green-600">Join Now</button>
        </div>

        <p className="mt-8 text-xl">{welcomeMessage}</p>
      </div>
    </main>
  );
}

// Server Side Rendering
export const getServerSideProps: GetServerSideProps = async () => {
  const welcomeMessage= await getData();
  return { props: { welcomeMessage } };
};

// This would be an asynchronous fetch request in a real project
const getData = async () => {
  return `Congratulations! You are visiting us on ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
};
