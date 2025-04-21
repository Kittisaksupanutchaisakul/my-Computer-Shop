"use client";
export default function ContactPage() {
    return (
      <main className="p-6 max-w-3xl mx-auto min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-800 drop-shadow-lg">
            📞 ติดต่อเรา
          </h1>
          <p className="mb-6 text-center text-lg text-gray-700">
            หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการติดต่อเกี่ยวกับสินค้า
            <br />
            โปรดส่งอีเมลมาที่: <strong>support@mycomputershop.com</strong>
          </p>
  
          <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-8">
            <p className="text-center text-xl text-gray-800">
              หรือโทร: <strong>081-234-5678</strong>
            </p>
            <p className="text-center text-lg text-gray-600 mt-2">
              เวลาทำการ: จันทร์ - ศุกร์ 9:00 - 17:00
            </p>
          </div>       
        </div>
      </main>
    );
  }
  