import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/posts">Posts List</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </main>
  );
}
