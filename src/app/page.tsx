// 'use client' is not added since we are not using any React hooks in this component

import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Veganicity</h1>
        <p className="text-xl">The social network dedicated to vegans. Connect, share and learn in a like-minded community.</p>
        <Image
          src="/vegan_social.jpg"
          height={500}
          width={600}
          alt="Vegan Social Network"
          className="my-5"
        />
      </section>

      <section className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="text-2xl mb-3">Connect</h3>
              <p>Find and connect with other vegans around the globe.</p>
            </div>
            <div>
              <h3 className="text-2xl mb-3">Share</h3>
              <p>Share your favorite plant-based recipes and exciting finds.</p>
            </div>
            <div>
              <h3 className="text-2xl mb-3">Learn</h3>
              <p>Join discussions on different topics and learn more about the vegan lifestyle.</p>
            </div>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-xl mb-5">Become part of the biggest vegan community on the internet.</p>
        <button className="px-14 py-4 text-white bg-green-600 rounded-full hover:bg-green-500">Create Account</button>
      </section>
    </div>
  );
};

export default Home;
