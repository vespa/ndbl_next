import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/">
      <a href="/">
      Home
      </a>
    </Link>
    <Link href="/test">
      <a href="/test">About</a>
    </Link>
  </div>
);

export default Index;
