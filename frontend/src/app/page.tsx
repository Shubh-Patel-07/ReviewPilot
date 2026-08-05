import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold text-primary">ReviewAI</div>
        <nav className="flex gap-4">
          <Link href="/login" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Sign Up</Link>
        </nav>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Google Reviews</span> with AI
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          Get more authentic 5-star reviews in seconds. Our smart QR codes and AI drafting tool make it effortless for your customers.
        </p>
        <div className="flex gap-4">
          <Link href="/register" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg">
            Start Free Trial
          </Link>
          <Link href="/r/demo" className="px-8 py-4 bg-card border border-border text-foreground rounded-full font-semibold text-lg hover:bg-muted transition-colors shadow-sm">
            View Live Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
