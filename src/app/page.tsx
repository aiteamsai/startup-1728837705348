import { Fragment } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Vegan Network</title>
        <meta name="description" content="Join the Vegan Network - a community for vegans to connect, share and learn." />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center min-h-screen text-2xl">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-5xl">Join the Vegan Network</h1>
            <h2 className="text-3xl">Connect, Share and Learn</h2>
          </section>

          {/* Features/Benefits Section */}
          <section className="flex flex-col space-y-4">
            <h3 className="text-4xl">Features</h3>
            <ul>
              <li>Profile Customization</li>
              <li>Share Plant-Based Recipes</li>
              <li>Recommend Vegan-Friendly Restaurants</li>
              <li>Discuss Animal Welfare Issues</li>
              <li>Product Review System</li>
              <li>Community Challenges</li>
            </ul>
          </section>

          {/* Call to Action Section */}
          <section className="flex flex-col items-center justify-center space-y-4">
            <h4 className="text-3xl">Join Us Now</h4>
            <button className="px-5 py-3 bg-blue-500 rounded-lg text-white">Sign Up</button>
          </section>
        </div>
      </main>
    </Fragment>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {},
  }
}
