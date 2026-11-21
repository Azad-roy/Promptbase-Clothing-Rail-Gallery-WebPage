import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DHXWHY / STUDIO — Season 01",
  description: "A considered edit of ten pieces, ready to browse on the rail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
