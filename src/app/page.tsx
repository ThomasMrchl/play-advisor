import Image from "next/image";
import { HomeCarousel } from "@/components/HomeCarousel";

export default function Home() {
  return (
    <div className="flex items-start justify-center min-h-screen pt-16">
      <HomeCarousel />
    </div>
  );
}
