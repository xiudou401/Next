import { useRouter } from 'next/router';
import { getCurrentTime } from '../../lib';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Page = () => {
  const router = useRouter();
  const id = router.query.postId;
  const [dt, setDt] = useState('');
  const [data, setData] = useState<Post | null>(null);

  const fetchData = () => {
    if (!id) return;
    fetch('https://dummyjson.com/posts/' + id)
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        setData(reply);
        setDt(getCurrentTime());
      });
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <main>
      <h1> Post Details page {id} </h1>
      {data ? (
        <>
          <h4>{data.title}</h4>
          <h4>{dt}</h4>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Page;
