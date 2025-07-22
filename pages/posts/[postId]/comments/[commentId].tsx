import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const pid = router.query.postId;
  const cid = router.query.commentId;

  return (
    <main>
      <h1>
        Comment Details page {pid} :: {cid}
      </h1>
    </main>
  );
};

export default Page;
