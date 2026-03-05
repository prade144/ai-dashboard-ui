"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Settings, LogIn, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition ${
      pathname === path
        ? "bg-gray-800 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setOpen(!open)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-gray-900 dark:bg-black text-white p-6 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-8">AI Dashboard</h2>

        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link href="/settings" className={linkClass("/settings")}>
            <Settings size={18} />
            Settings
          </Link>

          <Link href="/login" className={linkClass("/login")}>
            <LogIn size={18} />
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}