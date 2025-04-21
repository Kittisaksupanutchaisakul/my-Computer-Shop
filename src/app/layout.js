import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "My Computer Shop",
  description: "เว็บขายอุปกรณ์คอม",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
