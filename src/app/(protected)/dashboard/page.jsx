import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();
  console.log("session:",session)

  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
      <div className="flex items-center gap-6 mb-6">
        {session?.user?.image && (
          <img 
            src={session.user.image} 
            alt="Profile Avatar" 
            className="w-20 h-20 rounded-full shadow-sm"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {session?.user?.name}!</h1>
          <p className="text-gray-600">Here is your developer overview.</p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <p className="text-lg mb-2"><strong>Name:</strong> {session?.user?.name}</p>
        <p className="text-lg"><strong>Email:</strong> {session?.user?.email}</p>
      </div>
    </div>
  );
}