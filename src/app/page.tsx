import { NextRouter, useRouter } from 'next/router';
import React, { ReactElement } from 'react';

export default function Home(): ReactElement {
  const router: NextRouter = useRouter();

  const goToCommunity = (): void => {
    router.push('/community');
  };

  const goToMarketplace = (): void => {
    router.push('/marketplace');
  };

  const goToRecipes = (): void => {
    router.push('/recipes');
  };

  const goToRestaurantLocator = (): void => {
    router.push('/restaurant-locator');
  };

  return (
    <div>
      <h1>Welcome to VeganMate</h1>
      <p>Your one-stop platform exclusively designed for vegans.</p>
      <button onClick={goToCommunity}>Community Forum</button>
      <button onClick={goToMarketplace}>Vegan Marketplace</button>
      <button onClick={goToRecipes}>Recipes & Blogs</button>
      <button onClick={goToRestaurantLocator}>Restaurant Locator</button>
    </div>
  );
}