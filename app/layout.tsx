import "./globals.css";
import { poppins } from "./lib/font";


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en-us">
      <head>
        <link href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" rel="stylesheet"></link>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}