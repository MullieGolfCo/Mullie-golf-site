import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mullie Golf Co.",
  description: "Timeless golf apparel made for another swing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
