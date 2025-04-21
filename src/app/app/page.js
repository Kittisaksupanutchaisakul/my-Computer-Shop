"use client";
import Navbar from "../../Navbar";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-3xl font-semibold mb-4">ตะกร้าสินค้า</h2>
        {cart.length === 0 ? (
          <p>ไม่มีสินค้าในตะกร้า</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p>
                    {item.price.toLocaleString()} บาท × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  ลบ
                </button>
              </div>
            ))}
            <hr />
            <p className="text-xl font-semibold">รวม: {total.toLocaleString()} บาท</p>
            <button
              onClick={clearCart}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              ล้างตะกร้า
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
