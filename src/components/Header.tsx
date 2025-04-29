import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-6 py-4 shadow-md">
      {/* Site Name */}
      <div className="text-2xl text-transparent text-white">
        playAdvisor
      </div>

      {/* Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full dark:text-white"
        />
      </div>

      {/* Account Button */}
      <div>
        <Button variant="outline" className="dark:border-gray-700 dark:text-white">
          Leaderboard
        </Button>
      </div>
    </header>
  );
}
