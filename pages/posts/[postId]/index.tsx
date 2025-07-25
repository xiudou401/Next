import RouterButton from '@/components/RouterButton';
import { getCurrentTime } from '../../../lib';
import { GetStaticPropsContext } from 'next';
interface Props {
  id: number;
  dt: number;
  data: Post;
}

interface Post {
  title: string;
  body: string;
}

interface PostSummary {
  id: number;
}

const Page = ({ id, dt, data }: Props) => {
  return (
    <main>
      <h1> Post Details page {id} </h1>
      {data ? (
        <>
          <h4>{data.title}</h4>

          <h4>{dt}</h4>
          <RouterButton />
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Page;

export async function getStaticPaths() {
  const response = await fetch('https://dummyjson.com/posts');
  const reply: { posts: PostSummary[] } = await response.json();
  return {
    // paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    paths: reply.posts.map((post) => ({
      params: { postId: post.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params || !context.params.postId) {
    return {
      notFound: true,
    };
  }
  const id = context.params.postId;
  const dt = getCurrentTime();
  const response = await fetch('https://dummyjson.com/posts/' + id);
  const reply = await response.json();

  return {
    props: {
      id,
      dt,
      data: reply,
    },
  };
}
