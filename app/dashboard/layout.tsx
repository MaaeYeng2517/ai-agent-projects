export default function DashboardLayout({ children }: any) {
  return (
    <div className="grid grid-cols-[220px_1fr] min-h-screen">
      <aside className="border-r p-6 space-y-4">
        <a href="/dashboard">Overview</a>
        <a href="/dashboard/posts">Posts</a>
        <a href="/">Back to site</a>
      </aside>

      <main className="p-10 bg-gray-50">
        {children}
      </main>
    </div>
  )
}

