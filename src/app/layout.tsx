import type { Metadata } from "next";
import { SuisseIntl } from "./font";
import { ThemeProvider } from "@/components/provider-wrappers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krea",
  description: "Cartolink project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SuisseIntl.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
