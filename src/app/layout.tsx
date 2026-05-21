import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul | Full Stack Developer - MERN & Laravel Portfolio",
  description: "As a passionate Full Stack Developer based in India, I specialize in crafting high-performance web applications using the MERN stack, Laravel, React Native, and Next.js, combined with interactive frontend motion via GSAP and Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/Assets/favicon.png" type="image/x-icon" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
