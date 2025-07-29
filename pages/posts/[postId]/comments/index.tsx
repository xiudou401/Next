import RouterButton from '@/components/RouterButton';
import { getCurrentTime } from '@/lib';
import { GetStaticPropsContext } from 'next';

interface Props {
  dt: string;
  id: number;
  comments: [];
}

interface Comment {
  id: number;
  body: string;
}

export default function Page({ dt, comments }: Props) {
  return (
    <main>
      <h1>Comments List Page</h1>
      <h4>{dt}</h4>
      <RouterButton />
      <ul>
        {comments.map((comment: Comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '47' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params || !context.params.postId) {
    return {
      notFound: true,
    };
  }
  const dt = getCurrentTime();
  const response = await fetch('https://dummyjson.com/comments');
  const reply = await response.json();
  return {
    props: { dt, comments: reply.comments },
    revalidate: 3000,
  };
}
