import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h2>Hello, I am Ebbad Asghar and this is my first Next.js project.</h2>
      <ul>
        <li><Link href="/blog" replace>Blog</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}


