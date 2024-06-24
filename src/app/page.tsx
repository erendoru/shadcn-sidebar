import MobileNav from "@/components/ui/mobile-nav";
import Sidebar from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <MobileNav />
    </div>
  );
}
