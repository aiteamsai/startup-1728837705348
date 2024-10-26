import React from 'react';
import { useRouter } from 'next/router';

// Type for user
type User = {
  id: number;
  username: string;
  isVegan: boolean;
};

const VeganSocialNetwork: React.FC = () => {
  const router = useRouter();

  // Assuming we get the user details from a API/service
  // Just created an example object for this exercise
  const user: User = {
    id: 1,
    username: 'vegan01',
    isVegan: true,
  };

  // Redirection if not a vegan
  if (!user.isVegan) {
    router.push('/');
  }

  return (
    <div>
      <h1>Welcome to Vegan Social Network, {user.username}!</h1>
      <p>
        Here you can find vegan-friendly restaurants, share recipes, engage in discussions, 
        and coordinate events with other vegans.
      </p>
    </div>
  );
};

export default VeganSocialNetwork;