import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-medium mt-2">{product.name}</h3>
      <p className="text-green-600 font-semibold mt-1">{product.price.toLocaleString()} บาท</p>
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}
