"use client";

import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to DevConnect</h1>
      <p className="text-xl text-gray-600 mb-8">The open-source network for developers.</p>
      
      <button 
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Log in with GitHub
      </button>
    </div>
  );
}