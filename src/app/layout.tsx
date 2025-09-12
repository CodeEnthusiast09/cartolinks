import type { Metadata } from "next";
import { SuisseIntl } from "./font";
import { ThemeProvider } from "@/components/provider-wrappers/theme-provider";
import "./globals.css";
import ReduxProvider from "@/redux/redux-provider";

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
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
