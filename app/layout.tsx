import "./globals.css"
import Navbar from "./components/layouts/page"

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}