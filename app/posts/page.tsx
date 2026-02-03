import { supabase } from "../libs/supabase"
import Link from "next/link"

export default async function PostsPage() {
  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Posts</h2>

      {data?.map(post => (
        <Link
          key={post.id}
          href={`/posts/${post.slug}`}
          className="block p-6 border rounded-2xl hover:shadow"
        >
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-500">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  )
}