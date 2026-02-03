"use client"

import { useState } from "react"
import { supabaseClient } from "../libs/supabase-client"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const supabase = supabaseClient()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) router.push("/dashboard")
    else alert(error.message)
  }

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>

      <input
        className="border p-3 w-full rounded-xl"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-3 w-full rounded-xl"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-black text-white px-4 py-3 rounded-xl w-full"
      >
        Login
      </button>
    </div>
  )
}