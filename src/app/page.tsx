'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  return (
    <div>
      <h2>Hello, I am Ebbad Asghar and this is my first Next.js project.</h2>
      <h3>This is Home Page.</h3>
        
    </div>
  );
}


