import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";
import Contact from "./components/contact";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Debarati Datta",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  const windowWidth =  typeof window !== "undefined" && window.screen.width>=768;
  return (
    <html lang="en">
      <head>
      <link rel='icon' type='image/png' href='./favicon.png' />
      <link rel='icon' type='image/png' sizes="180x180" href='./favicon.png' />
      </head>
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        <Navbar />
          {children}
        <Contact orientation={"vertical"} />
      </ThemeProvider>
      </body>
    </html>
  );
}
