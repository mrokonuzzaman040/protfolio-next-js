import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Rokon Uzzaman | Web Developer",
  description: "Rokon Uzzaman is a web developer based in Dhaka, Bangladesh. Full-stack developer with a focus on front-end development. I love to build beautiful and functional websites.",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
