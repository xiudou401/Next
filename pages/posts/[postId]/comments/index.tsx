import { getCurrentTime } from '@/lib';
import { useEffect, useState } from 'react';

interface Comment {
  id: number;
  body: string;
}

export default function Page() {
  const [dt, setDt] = useState('');
  const [data, setData] = useState<Comment[]>([]);

  const fetchData = () => {
    fetch('https://dummyjson.com/comments')
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        setDt(getCurrentTime());
        console.log(reply.comments);
        setData(reply.comments);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Comments List Page</h1>
      <h4>{dt}</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </main>
  );
}
