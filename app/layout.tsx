import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: 'nextauth example',
  description: 'next-auth starter'
}



export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
