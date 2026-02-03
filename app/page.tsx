import Link from "next/link"

export const metadata = {
  title: "AI-Native Technical Blog",
  description:
    "Advanced engineering blog about AI, Edge, Backend, System Design and scalable architecture."
}

const features = [
  {
    title: "Technical Blogs",
    desc: "บทความเชิงลึกด้าน Backend, Edge, AI และ System Architecture",
  },
  {
    title: "Real Projects",
    desc: "ตัวอย่างโค้ดจริง Boilerplate พร้อมใช้งาน Production",
  },
  {
    title: "SEO Optimized",
    desc: "ออกแบบโครงสร้างรองรับ SEO / AEO / GEO",
  },
]

const posts = [
  {
    id: 1,
    slug: "edge-first-computing",
    title: "Edge-first Computing Architecture",
    excerpt: "ออกแบบ API และ Backend ให้เร็วกว่า Cloud แบบเดิม 10 เท่า...",
  },
  {
    id: 2,
    slug: "ai-agent-native",
    title: "AI Agent-Native คืออะไร",
    excerpt: "แนวคิดใหม่ของซอฟต์แวร์ที่ AI เป็นศูนย์กลาง...",
  },
  {
    id: 3,
    slug: "supabase-vs-vercel",
    title: "Supabase vs Vercel",
    excerpt: "เปรียบเทียบ BaaS vs Platform สำหรับ Dev สมัยใหม่...",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-20 space-y-32">
    <section className="space-y-10">
      <h1 className="text-5xl font-bold">
        Maae2517 Content WebBlogs
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl">
        รู้เรียน เทคโนโลยีใหม่ ๆ  ทันสมัย 
      </p>

      <div className="flex gap-4">
        <Link href="/posts" className="px-5 py-3 rounded-2xl shadow bg-black text-white">
          อ่านบทความ
        </Link>
        <Link href="/projects" className="px-5 py-3 rounded-2xl border">
          ดูโปรเจกต์
        </Link>
      </div>
    </section>


      <section className="bg-gray-50 py-20">
                <h2 className="text-3xl font-bold mb-10">Top Posts</h2>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Latest Posts</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/posts/${post.slug}`}
              className="p-6 rounded-2xl border hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white text-center py-20">
        <h2 className="text-3xl font-bold">Join 1,000,000+ Readers</h2>
        <p className="mt-3 opacity-90">
          สมัครสมาชิกเพื่อรับบทความใหม่และเทคนิค Dev ทุกสัปดาห์
        </p>

        <div className="mt-6 flex  justify-center gap-3">
          <input
            placeholder="your@email.com"
            className="px-4 py-3 rounded-xl text-white w-72"
          />
          <button className="bg-gray-100 text-black px-5 py-3 rounded-xl">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        © 2026 Maae Blogs • 
      </footer>
      </main>
  )
}