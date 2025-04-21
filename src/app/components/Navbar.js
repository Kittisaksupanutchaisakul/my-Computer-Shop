"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/">My Computer Shop</Link>
      </h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
