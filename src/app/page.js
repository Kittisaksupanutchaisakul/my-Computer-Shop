import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">ยินดีต้อนรับสู่ My Computer Shop 🖥️</h1>
      
      {/* ปุ่มไปหน้าสินค้า */}
      <Link href="/products" className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600">
        ดูสินค้าทั้งหมด
      </Link>
    </main>
  );
}
