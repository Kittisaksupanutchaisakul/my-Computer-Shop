"use client";
import { useState } from "react";
import products from "../../data/products";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 max-w-7xl mx-auto min-h-screen bg-white relative">

      {/* ✅ ปุ่มกลับหน้าแรก (อยู่ใน layout ธรรมดา ) */}
      <div className="flex justify-between items-center mb-6">
        {/* กลับหน้าแรก */}
        <Link
          href="/"
          className="inline-flex items-center text-black hover:text-blue-600 font-medium transition"
        >
          <Home size={22} className="mr-2" />
          กลับหน้าแรก
        </Link>

        {/* ปุ่มติดต่อ */}
        <Link
          href="/contact"
          className="inline-flex items-center text-black hover:text-green-600 font-medium transition"
        >
          📞 ติดต่อ
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-black text-center drop-shadow">💻 รายการสินค้า</h1>
      <h2 className="mb-6 text-black text-center">
        ยินดีต้อนรับสู่ร้าน <strong>My Computer Shop</strong> <br />
        ร้านเรามีสินค้าให้เลือกอย่างมากมาย และมีคุณภาพ เหมาะสำหรับคนชอบคอมพิวเตอร์เหมือนดั่งเรา
      </h2>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="🔍 ค้นหาสินค้า..."
        className="w-full px-4 py-2 border border-gray-300 rounded mb-6 text-black shadow"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📦 แสดงสินค้าที่ค้นหา */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="rainbow-border p-[2px] rounded-xl hover:scale-105 transition duration-300">
                <div className="bg-white rounded-lg p-4 shadow-lg h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="rounded mb-2"
                  />
                  <h2 className="text-lg font-semibold text-black">{product.name}</h2>
                  <p className="text-gray-800">{product.price.toLocaleString()} บาท</p>
                  <p className="text-sm text-gray-600">คงเหลือ: {product.stock} ชิ้น</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-black">ไม่พบสินค้าที่ค้นหา</p>
        )}
      </div>

      {/* 🔗 ปุ่มไปที่ตะกร้า */}
      <Link
        href="/cart"
        className="fixed bottom-4 right-4 px-6 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 z-50"
      >
        🛒 ไปที่ตะกร้าสินค้า
      </Link>

      {/* 🌈 แอนิเมชัน */}
      <style jsx>{`
        .rainbow-border {
          background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
          background-size: 400% 400%;
          animation: rainbow 6s linear infinite;
          border-radius: 16px;
        }

        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}
