import { useRouter } from 'next/router';
import { useState } from 'react';

const DiscussPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<object | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`/api/discuss/${id}`);
      const data = await response.json();
      setPost(data);
    }

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DiscussPost;