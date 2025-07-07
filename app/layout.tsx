import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keto Mojo Health Dashboard",
  description: "Keto Mojo Health Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
