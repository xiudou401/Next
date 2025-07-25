import { useRouter } from 'next/router';
import React from 'react';

export default function RouterButton() {
  const router = useRouter();
  return (
    <div style={{ marginTop: '1rem', display: 'flex' }}>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          router.push('/');
        }}
      >
        Home
      </button>
    </div>
  );
}
