'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  return (
    <div>
      <h2>Hello, I am Ebbad Asghar and this is my first Next.js project.</h2>
      
        <button type= "button" onClick={() => router.push('/blog')}>
          Blog
        </button>
      <ul>
        {/* <li><Link href="/blog" replace>Blog</Link></li> */}
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul> 
    </div>
  );
}


