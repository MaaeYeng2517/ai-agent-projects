import { supabase } from "../../../libs/supabase"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const { data } = await supabase
    .from("posts")
    .select("seo_title, seo_description, title")
    .eq("slug", params.slug)
    .single()

  return {
    title: data?.seo_title || data?.title,
    description: data?.seo_description
  }
}

export default async function PostPage({ params }: Props) {
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single()

  if (!post) return notFound()

  // เพิ่ม view counter
  await supabase
    .from("posts")
    .update({ views: post.views + 1 })
    .eq("id", post.id)

  return (
    <article className="prose max-w-3xl mx-auto">
      <h1>{post.title}</h1>

      <p className="text-gray-400 text-sm">
        Views: {post.views}
      </p>

      <div className="mt-6 whitespace-pre-wrap">
        {post.content}
      </div>
    </article>
  )
}