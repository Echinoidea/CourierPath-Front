'use client';

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMessage(data.message);
    })
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{message}</p>
    </main>
  );
}
