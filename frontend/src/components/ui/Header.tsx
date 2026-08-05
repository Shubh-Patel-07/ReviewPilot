import { Button } from "./Button";
import { LogOut, Bell } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-14 lg:h-16 items-center gap-4 border-b bg-muted/40 px-6">
      <div className="flex-1" />
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      <div className="flex items-center gap-4">
        <div className="flex flex-col text-right">
          <span className="text-sm font-medium">Business Admin</span>
          <span className="text-xs text-muted-foreground">admin@example.com</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          BA
        </div>
        <Link href="/login">
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
