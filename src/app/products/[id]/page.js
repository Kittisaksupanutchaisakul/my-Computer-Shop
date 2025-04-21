"use client";

import { useParams } from "next/navigation";
import products from "../../../data/products";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product)
    return (
      <div className="text-center text-red-600 text-xl mt-10">ไม่พบสินค้า</div>
    );

  return (
    <main
      className="p-6 max-w-5xl mx-auto min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="rainbow-border p-[2px] rounded-2xl mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* 🔻 ภาพสินค้า */}
            <div className="flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* 🔻 รายละเอียดสินค้า */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 drop-shadow">
                  {product.name}
                </h1>

                <p className="text-2xl font-semibold text-green-600 mb-2">
                  ราคา: {product.price.toLocaleString()} บาท
                </p>

                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  alert("เพิ่มสินค้าลงในตะกร้าแล้ว!");
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-md"
              >
                🛒 หยิบใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔄 CSS animation rainbow border */}
      <style jsx>{`
        .rainbow-border {
          background: linear-gradient(
            45deg,
            red,
            orange,
            yellow,
            green,
            blue,
            indigo,
            violet,
            red
          );
          background-size: 400% 400%;
          animation: rainbow 6s linear infinite;
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
