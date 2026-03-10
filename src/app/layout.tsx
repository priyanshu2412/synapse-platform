import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/auth/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-headline"
});

export const metadata: Metadata = {
  title: "Synapse – Cross-Industry Innovation Network",
  description:
    "Synapse connects problems from one industry with solutions from others using AI-powered neural matching.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ background: "#0A0F14" }}>
      <body
        className={`${inter.variable} ${exo2.variable} font-body bg-deep-black text-text-white min-h-screen antialiased`}
        style={{
          backgroundColor: "#0A0F14",
          color: "#E5E7EB",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        <div className="relative min-h-screen bg-neural-gradient">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(0,255,156,0.15),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(56,255,179,0.18),transparent_60%)] opacity-80 mix-blend-screen" />
          <Providers>
            <div className="relative z-10">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}

