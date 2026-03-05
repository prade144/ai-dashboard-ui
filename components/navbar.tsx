import { Search, Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow rounded-lg">

      <div className="flex items-center gap-3">

        <Search className="text-gray-600 dark:text-gray-300" size={18} />

        <input
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm 
          bg-white dark:bg-gray-700 
          text-gray-900 dark:text-white 
          placeholder-gray-400 dark:placeholder-gray-400"
          placeholder="Search..."
        />

      </div>

      <div className="flex items-center gap-4">

        <ThemeToggle />

        <Bell className="text-gray-600 dark:text-gray-300" size={18} />

        <User className="text-gray-600 dark:text-gray-300" size={18} />

        <span className="text-gray-900 dark:text-white">
          Pradeep
        </span>

      </div>

    </div>
  );
}