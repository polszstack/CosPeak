import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CosPeak Universe Lab",
  description: "A visual showcase explaining how the universe works, with space trivia and exploration ideas."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
