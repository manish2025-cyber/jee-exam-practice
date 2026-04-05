import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">
        JEE Practice Portal
      </h1>
      <p className="mb-6 text-lg">
        Practice mock questions and test your knowledge instantly.
      </p>

      <Link href="/dashboard">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Start Practice
        </button>
      </Link>
    </main>
  );
}
