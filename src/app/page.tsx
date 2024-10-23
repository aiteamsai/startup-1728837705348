// src/pages/index.tsx
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <div>
            {/* Hero section */}
            <section className="text-center py-20 bg-blue-500 text-white">
                <h1 className="text-5xl font-bold">A social network for Vegans</h1>
                <p className="text-lg mt-4">Connect, share recipes, recommend restaurants, discuss issues</p>
            </section>

            {/* Features/Benefits section */}
            <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h2 className="text-2xl font-bold">Profile Customization</h2>
                    <p>Customize your profile to reflect your personality and share your vegan story with the community.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Photo Sharing</h2>
                    <p>Share your most delicious vegan recipes with the rest of us.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Product Review System</h2>
                    <p>Share and discover reviews about vegan-friendly restaurant and products.</p>
                </div>
            </section>

            {/* Call to action section */}
            <section className="py-20 text-center bg-green-600 text-white">
                <h2 className="text-4xl font-bold mb-4">Join our vegan community today!</h2>
                <button className="px-8 py-3 bg-white text-green-600 font-bold rounded">Get Started</button>
            </section>
        </div>
    );
};

export default IndexPage;
