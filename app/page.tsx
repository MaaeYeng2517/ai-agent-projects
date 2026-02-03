import Link from "next/link"

export const metadata = {
  title: "AI-Native Technical Blog",
  description:
    "Advanced engineering blog about AI, Edge, Backend, System Design and scalable architecture."
}

export default function Home() {
  return (
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
  )
}