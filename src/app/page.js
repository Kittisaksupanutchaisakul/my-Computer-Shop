'use client';
import Link from "next/link";
import { FaMicrochip, FaKeyboard, FaMouse, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center gap-6 px-4 relative overflow-hidden">

      {/* โลโก้ไอคอนหมุน */}
      <div className="z-10 animate-spin-slow text-blue-400 text-6xl">
        <FaMicrochip />
      </div>

      {/* หัวข้อหลัก */}
      <h1 className="z-10 text-4xl md:text-5xl font-bold text-center">
        ยินดีต้อนรับสู่ My Computer Shop 🖥️
      </h1>

      {/* คำโปรย */}
      <p className="z-10 text-center text-lg text-gray-300 max-w-xl">
        ร้านค้าอุปกรณ์คอมพิวเตอร์ที่คุณไว้ใจได้ 💡 พบกับสินค้าใหม่ล่าสุด
        ตั้งแต่เมาส์ คีย์บอร์ด ไปจนถึงฮาร์ดแวร์แรงๆ สำหรับสายเกมและสาย Dev!
      </p>

      {/* ปุ่มไปหน้าสินค้า */}
      <Link
        href="/products"
        className="z-10 mt-4 px-8 py-3 bg-blue-600 text-lg rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        ดูสินค้าทั้งหมด
      </Link>

      {/* ไอคอนหมวดสินค้า */}
      <div className="z-10 mt-8 flex gap-8 text-3xl text-blue-300 animate-fade-in">
        <FaKeyboard title="Keyboard" />
        <FaMouse title="Mouse" />
        <FaLaptopCode title="Laptop & Dev Tools" />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
