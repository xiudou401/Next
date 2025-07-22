import { useEffect, useState } from 'react';
import { getCurrentTime } from '../lib';

interface Post {
  id: number;
  title: string;
}

export default function Page() {
  const [dt, setDt] = useState('');
  const [data, setData] = useState<Post[]>([]);

  const fetchData = () => {
    fetch('https://dummyjson.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        console.log(reply);
        setData(reply.posts);
        setDt(getCurrentTime());
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <h1>Posts List Page</h1>
      <h4>{dt}</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
    </main>
  );
}
