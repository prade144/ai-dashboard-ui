import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg">

      <div className="flex items-center gap-3">

        <Search size={18} />

        <input
          className="border rounded px-3 py-1 text-sm"
          placeholder="Search..."
        />

      </div>

      <div className="flex items-center gap-4">

        <Bell size={18} />

        <div className="flex items-center gap-2">

          <User size={18} />

          <span className="text-sm font-medium">
            Pradeep
          </span>

        </div>

      </div>

    </div>
  );
}