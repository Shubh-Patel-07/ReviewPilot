"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, QrCode, BarChart, Star, Settings, CreditCard, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "QR Codes", href: "/qr-codes", icon: QrCode },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Analytics", href: "/analytics", icon: BarChart },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Billing", href: "/billing", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card text-card-foreground">
      <div className="flex h-14 items-center border-b px-4 lg:h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl text-primary font-bold">ReviewAI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm font-medium">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
