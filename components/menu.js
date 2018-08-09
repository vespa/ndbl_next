// This is the Link API
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/test">
      <a>testPage</a>
    </Link>
  </div>
)

export default Index