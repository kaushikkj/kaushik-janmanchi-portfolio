import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaushik Janmanchi | Software Engineer · Cloud · SRE",
  description:
    "Portfolio of Kaushik Janmanchi — Software Engineering, Cloud Platform, DevOps, SRE, Observability, Data Engineering and AI/LLM tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
