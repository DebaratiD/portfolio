import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/navbar";
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
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}
      <Contact orientation={"vertical"} />
      </body>
    </html>
  );
}
