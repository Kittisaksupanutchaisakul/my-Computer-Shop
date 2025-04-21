"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product || product.stock <= 0) return;

    const updatedStock = product.stock - 1;
    const docRef = doc(db, "products", id);

    await updateDoc(docRef, { stock: updatedStock });
    setProduct({ ...product, stock: updatedStock });
    addToCart(product);
    alert("เพิ่มสินค้าลงในตะกร้าแล้ว!");
  };

  if (!product) return <div>กำลังโหลดสินค้า...</div>;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        className="rounded mb-4"
      />
      <p className="text-xl mb-2">ราคา: {product.price.toLocaleString()} บาท</p>
      <p className="mb-2">สต๊อก: {product.stock}</p>
      <p className="mb-6 text-gray-600">{product.description}</p>

      <button
        onClick={handleAddToCart}
        disabled={product.stock <= 0}
        className={`${
          product.stock <= 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white px-6 py-3 rounded-lg`}
      >
        {product.stock <= 0 ? "สินค้าหมด" : "หยิบใส่ตะกร้า"}
      </button>
    </main>
  );
}
