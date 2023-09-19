"use client";

import Image from 'next/image'
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between overflow-hidden">
      <Hero />
    </main>
  )
}
