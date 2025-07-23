import { getCurrentTime } from '../../lib';

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
      <ul>
        {data.map((item, index: number) => (
          <li key={index}>
            <h4>{item.title}</h4>
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
