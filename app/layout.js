import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Rokon Uzzaman | Web Developer",
  description: "I'm a web developer based in Dhaka, Bangladesh. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        { children }
      </body>
    </html>
  );
}
