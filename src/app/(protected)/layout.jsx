import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProtectedLayout({ children }) {
  const session = await getServerSession();
  console.log("cookie session:",session)
  
  if (!session) {
    redirect("/"); 
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar UI */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        
        <nav className="flex flex-col space-y-4 flex-grow">
          <Link href="/dashboard" className="hover:text-blue-400">My Profile</Link>
          <Link href="/dashboard/settings" className="hover:text-blue-400">Settings</Link>
        </nav>

        {/* Note: In a real app, this would be a Client Component using Auth.js signOut() */}
        <button className="bg-red-600 py-2 rounded mt-auto hover:bg-red-700">
          Log Out
        </button>
      </aside>

      {/* 3. The Photograph (This is where dashboard/page.tsx gets injected!) */}
      <main className="flex-1 p-10">
        {children}
      </main>
      
    </div>
  );
}