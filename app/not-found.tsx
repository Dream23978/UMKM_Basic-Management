import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
      <div className="text-9xl mb-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-lg">
        🍜
      </div>
      
      <h2 className="text-4xl font-bold text-gray-900 mb-8">404 - Halaman yang kamu cari ga ada</h2>

      <Link 
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg hover:-translate-y-1"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
