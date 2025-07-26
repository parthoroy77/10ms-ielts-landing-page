import Header from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const revalidate = 60;

export const metadata: Metadata = {
  applicationName: "10 Minute School",
  authors: [{ name: "10 Minute School" }],
  creator: "10 Minute School",
  publisher: "10 Minute School",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "bn" | "en" }>;
}>) {
  const lang = (await params).lang;
  return (
    <html lang={lang}>
      <body className={cn(inter.variable, "antialiased", "scrollbar-hidden")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
