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

<div className="grid gap-6">
  {data?.map(post => (
    <Link
      key={post.id}
      href={`/posts/${post.slug}`}
      className="p-6 border rounded-2xl hover:shadow-lg bg-white"
    >
      <h3 className="text-xl font-semibold">{post.title}</h3>

      <p className="text-gray-600 line-clamp-2">
        {post.excerpt}
      </p>

      <span className="text-sm text-gray-400">
        {post.views} views
      </span>
    </Link>
  ))}
</div>
    </div>
    
  )
}