import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getCurrentTime } from '@/pages/lib';

interface Comment {
  id: number;
  body: string;
  user: { username: string };
}

const Page = () => {
  const router = useRouter();
  const pid = router.query.postId;
  const cid = router.query.commentId;

  const [dt, setDt] = useState('');
  const [data, setData] = useState<Comment | null>(null);

  const fetchData = () => {
    fetch(`https://dummyjson.com/comments/${cid}`)
      .then((response) => response.json())
      .then((reply) => {
        console.log(reply);
        setData(reply);
        setDt(getCurrentTime());
      });
  };

  useEffect(() => {
    if (cid) {
      fetchData();
    }
  }, [cid]);

  return (
    <main>
      <h1>
        Comment Details page {pid} :: {cid}
      </h1>
      {data ? (
        <>
          <h4>{dt}</h4>
          <p>{data.body}</p>
          <p>-{data.user.username}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Page;
