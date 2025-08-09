import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})



export const metadata: Metadata = {
  title: "Royalty || We Empower You",
  description: "WE EMPOWER YOU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
