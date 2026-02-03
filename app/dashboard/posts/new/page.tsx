"use client"

import { useState } from "react"
import { supabaseClient } from "../../../libs/supabase-client"
import { useRouter } from "next/navigation"

export default function NewPost() {
  const supabase = supabaseClient()
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const createPost = async () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-")

    await supabase.from("posts").insert({
      title,
      content,
      slug,
      excerpt: content.slice(0, 150)
    })

    router.push("/dashboard/posts")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">New Post</h2>

      <input
        className="border p-3 w-full rounded-xl"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows={10}
        className="border p-3 w-full rounded-xl"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={createPost}
        className="bg-black text-white px-4 py-3 rounded-xl"
      >
        Publish
      </button>
    </div>
  )
}