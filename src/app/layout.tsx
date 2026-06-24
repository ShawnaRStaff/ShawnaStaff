import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shawnastaff.dev'),
  title: "Shawna Staff | Software Engineer",
  description: "Full-stack engineer, end-to-end. Patent-pending graph IAM, production AI/LLM systems, and cloud infrastructure — from database to deployment.",
  keywords: [
    "Shawna Staff", 
    "software engineer", 
    "portfolio", 
    "full-stack engineer",
    "full-stack developer",
    "React", 
    "ReactNative",
    "TypeScript",
    "Next.js",
    "Python", 
    "FastAPI",
    "C#",
    "ASP.NET",
    "DotNet",
    "HTMX",
    "postgreSQL",
    "SQL",

  ],
  authors: [{ name: "Shawna Staff" }],
  creator: "Shawna Staff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shawnastaff.dev", 
    title: "Shawna Staff | Software Engineer",
    description: "Full-stack engineer, end-to-end. Patent-pending graph IAM, production AI/LLM systems, and cloud infrastructure — from database to deployment.",
    siteName: "Shawna Staff Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Shawna Staff - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawna Staff | Software Engineer",
    description: "Full-stack engineer, end-to-end. Patent-pending graph IAM, production AI/LLM systems, and cloud infrastructure — from database to deployment.",
    images: ["/og-image.png"], 
    creator: "@shawnastaffreal",
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/site.webmanifest", 
  applicationName: "Shawna Staff Portfolio",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}