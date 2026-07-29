import Link from "next/link";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">DevConnect</Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
      </nav>
      <main className="p-8">
        {children}
      </main>
      
    </div>
  );
}