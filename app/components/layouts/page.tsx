import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex gap-6 p-4 font-medium">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/projects">Projects</Link>
         <Link href="/sponsor">Sponsor</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        <Link href="/login">Login</Link>
<Link href="/register">Register</Link>
      </div>
    </nav>
  )
}