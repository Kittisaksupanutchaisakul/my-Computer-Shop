"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();
  const [address, setAddress] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!address.trim()) {
      alert("กรุณาใส่ที่อยู่ก่อนทำการสั่งซื้อ");
      return;
    }

    alert(
      `สั่งซื้อสำเร็จ!\nจำนวน ${cartItems.length} รายการ\nรวม ${total.toLocaleString()} บาท\nที่อยู่: ${address}`
    );

    clearCart();
    setAddress("");
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">
          🛒 ตะกร้าสินค้า
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700">ยังไม่มีสินค้าในตะกร้า</p>
        ) : (
          <>
            <ul className="space-y-3 mb-6">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="border p-3 rounded-lg bg-gray-100 shadow-sm flex justify-between text-black"
                >
                  <span>{item.name}</span>
                  <span>{item.price.toLocaleString()} บาท</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold mb-4 text-black">
              💰 รวมทั้งหมด: {total.toLocaleString()} บาท
            </p>

            <label className="block mb-2 font-medium text-black">
              📦 ที่อยู่จัดส่ง
            </label>
            <textarea
              className="w-full border rounded p-3 mb-4 text-black bg-white"
              rows="3"
              placeholder="บ้านเลขที่ ถนน แขวง เขต จังหวัด รหัสไปรษณีย์"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>

            <button
              onClick={handleOrder}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all w-full mb-2"
            >
              ✅ สั่งซื้อ
            </button>

            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all w-full"
            >
              🗑️ ล้างตะกร้า
            </button>
          </>
        )}
      </div>
    </main>
  );
}
