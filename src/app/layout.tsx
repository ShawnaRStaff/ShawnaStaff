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
  themeColor: "#0f172a", // Tailwind's gray-950
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shawnastaff.dev'),
  title: "Shawna Staff | Software Engineer",
  description: "Software engineer specializing in full-stack development with expertise in React, TypeScript, Python, and .NET. View my projects and experience.",
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
    description: "Software engineer specializing in full-stack development with expertise in React, TypeScript, Python, and .NET.",
    siteName: "Shawna Staff Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Shawna Staff - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawna Staff | Software Engineer",
    description: "Software engineer specializing in full-stack development with expertise in React, TypeScript, Python, and .NET.",
    images: ["/og-image.jpg"], 
    creator: "@shawnastaffreal",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
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