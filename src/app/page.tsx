import { NextPage } from 'next'
import { useRouter } from 'next/router'

const VeganConnection: NextPage = () => {
  const router = useRouter()

  // The router.query object will contain the URL parameters.
  // You can use this to fetch data relevant to your page, for example.

  return (
    <div>
      <h1>Welcome to Vegan Connection</h1>
      <p>Use our tool to find the best vegan restaurants, share your recipes, coordinate events and much more!</p>
      <button onClick={() => router.push('/mvp')}>Check out our MVP</button>
      <button onClick={() => router.push('/products')}>Browse vegan products</button>
    </div>
  )
}

export default VeganConnection