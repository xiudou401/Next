import RouterButton from '@/components/RouterButton';
import { getCurrentTime } from '../../lib';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  dt: string;
  data: Post[];
}

export default function Page({ dt, data }: Props) {
  console.log('render');
  return (
    <main>
      <h1>Posts List Page</h1>
      <h4>{dt}</h4>
      <RouterButton />
      <ul>
        {data.map((item, index: number) => (
          <li key={index}>
            <h4>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </h4>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  console.log('static props');
  const dt = getCurrentTime();
  const response = await fetch('https://dummyjson.com/posts');
  const reply = await response.json();
  return {
    props: {
      dt,
      data: reply.posts,
    },
  };
}
