// src/app/page.tsx

import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

interface User {
  name: string;
  profilePic: string;
  sharedRecipes: string[];
  recommendedRestaurants: string[];
}

interface Review {
  title: string;
  user: User;
  rating: number;
  content: string;
}

const Page: NextPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Vegan Network
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Connect, Share &amp; Engage
      </p>

      <div className="mt-5">
        {reviews.map((review) => (
          <div key={review.title} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={review.user.profilePic}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p>
                <span className="text-sm font-medium text-gray-900">
                  {review.user.name}
                </span>
                <span className="text-sm text-gray-500">
                  {' '}
                  reviewed {review.title}
                </span>
              </p>
              <div className="mt-0.5 text-sm text-gray-900">
                {Array(review.rating)
                  .fill('⭐️')
                  .join('')}
              </div>
              <p className="mt-1 text-sm text-gray-500">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
