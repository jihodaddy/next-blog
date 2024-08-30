import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { siteConfig } from "./config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Shadcn ui',
    'Javascript',
    'Blog',
    'java',
    'spring boot',
    'backend'
  ],
  authors: [
    {
      name: 'Jihodaddy',
      url: 'https://github.com/jihodaddy'
    }
  ],
  creator: 'jihodaddy',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
