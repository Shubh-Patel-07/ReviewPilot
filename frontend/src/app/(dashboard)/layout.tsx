import { Sidebar } from "@/components/ui/Sidebar";
import { Header } from "@/components/ui/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
