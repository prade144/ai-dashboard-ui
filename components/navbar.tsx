import { Search, Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
   <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow rounded-lg">

      <div className="flex items-center gap-3">

        <Search size={18} />

        <input
        className="border rounded px-3 py-1 text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Search..."
        />

      </div>

      <div className="flex items-center gap-4">

        <ThemeToggle />

        <Bell size={18} />

        <User size={18} />

        <span>Pradeep</span>

      </div>

    </div>
  );
}