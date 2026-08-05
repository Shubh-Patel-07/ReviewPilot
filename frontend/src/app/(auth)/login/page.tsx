import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to ReviewAI</CardTitle>
          <p className="text-sm text-muted-foreground text-center">Enter your email to access your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard" className="block w-full">
              <Button className="w-full" type="button">Sign In</Button>
            </Link>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">Sign up</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
