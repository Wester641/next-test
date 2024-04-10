import Link from "next/link";

const TheHeader = () => {
  return (
    <header>
      <div>Hello world</div>
      <Link href="/home">Welcome! my page</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export { TheHeader };
