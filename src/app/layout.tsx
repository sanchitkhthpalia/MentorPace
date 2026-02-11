import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#22C55E" />
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
            forcedTheme="dark"
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
