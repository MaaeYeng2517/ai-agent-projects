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
        Build. Scale. Engineer.
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl">
        บล็อกเชิงวิศวกรรมสำหรับนักพัฒนาและ System Architect
        เน้นเทคนิคขั้นสูง + โค้ดจริง + Production mindset
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