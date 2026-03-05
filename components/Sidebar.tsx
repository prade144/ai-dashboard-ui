import { LayoutDashboard, Settings, LogIn } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-8">AI Dashboard</h2>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard" className="flex items-center gap-2 hover:text-gray-300">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/settings" className="flex items-center gap-2 hover:text-gray-300">
          <Settings size={18} />
          Settings
        </Link>

        <Link href="/login" className="flex items-center gap-2 hover:text-gray-300">
          <LogIn size={18} />
          Login
        </Link>

      </nav>
    </div>
  );
}