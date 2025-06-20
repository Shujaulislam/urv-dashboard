import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">
          URV Discord Server Admin Dashboard
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          Manage your Discord server with ease. View statistics, manage members,
          roles, and messages—all in a beautiful, accessible, and responsive
          dashboard. No backend required.
        </p>
        <Link
          href="/dashboard"
          className="inline-block rounded-lg px-6 py-3 bg-primary dark:bg-primary-foreground text-primary-foreground dark:text-primary-foreground 
          font-semibold shadow-lg hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
          focus-visible:ring-primary transition-colors text-lg"
          aria-label="Go to Dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
