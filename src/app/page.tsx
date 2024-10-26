import { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Post = {
  author: string
  content: string
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.vegan-network.com/posts')
  const posts: Post[] = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, 
  }
}

function VeganNetworkingPage({ 
  posts 
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Vegan Networking</h1>
      {posts.map((post) => (
        <div key={post.author}>
          <h2>{post.author}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default VeganNetworkingPage