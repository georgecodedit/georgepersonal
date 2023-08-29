import Navbar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import CopyrightComponent from "@/components/CopyrightComponet";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "George Penn",
  description: "George Penn Portfolio",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {" "}
        <Navbar />
        {children}
        <CopyrightComponent/>
      </body>
    </html>
  );
}
