import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Next Shadcn",
  description: "Basic dashboard with Next.js and Shadcn",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${inter.className}`}
      suppressHydrationWarning={true}
    >
      <body className={"overflow-hidden"}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
