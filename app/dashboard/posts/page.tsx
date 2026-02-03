import { supabase } from "../../libs/supabase"
import Link from "next/link"

export default async function DashboardPosts() {
  const { data } = await supabase.from("posts").select("*")

  return (
    <div>
      <Link
        href="/dashboard/posts/new"
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        + New Post
      </Link>

      <div className="mt-6 space-y-3">
        {data?.map((p) => (
          <div key={p.id} className="border p-4 rounded-xl">
            {p.title}
          </div>
        ))}
      </div>
    </div>
  )
}