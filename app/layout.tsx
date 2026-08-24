import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/data"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const siteUrl = "https://portfolio.example.com"
const description =
  "Portafolio de Williams Anthony Sanabria Tinoco — Ingeniero de Sistemas, Full Stack Developer especialista en Backend y Arquitectura de Software."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full Stack Developer`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Williams Sanabria",
    "Full Stack Developer",
    "Backend",
    "NestJS",
    "Next.js",
    "Ingeniero de Sistemas",
    "Arquitectura de Software",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: `${profile.name} — Full Stack Developer`,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Developer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={jakarta.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
