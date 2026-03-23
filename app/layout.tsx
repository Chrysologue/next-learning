import { poppins } from "@/lib/font"
import Footer from "./components/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en-us">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={poppins.className}>


        {children}
        <Footer />
      </body>
    </html>
  )
}