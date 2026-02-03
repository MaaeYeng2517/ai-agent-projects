import { supabase } from "../app/libs/supabase"
export const revalidate = 60
export default async function sitemap() {
    
  const { data } = await supabase.from("posts").select("slug")

  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date()
    },
    ...data!.map(p => ({
      url: `https://yourdomain.com/posts/${p.slug}`,
      lastModified: new Date()
    }))
  ]
}