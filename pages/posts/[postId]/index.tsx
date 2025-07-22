import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const id = router.query.postId;
  return (
    <main>
      <h1> Post Details page {id} </h1>
    </main>
  );
};

export default Page;
