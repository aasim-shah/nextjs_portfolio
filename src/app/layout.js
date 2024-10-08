import Header from "@/components/Header";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const metadata = {
  title: "Aasimshah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-[100vh] ${inter.className}`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="dark:bg-cyan-900">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
