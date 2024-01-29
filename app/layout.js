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
      <head>
        <title>{ metadata.title }</title>
        <meta name="description" content={ metadata.description } />
        <link rel="icon" href="../public/favicon.svg" />
        <link rel="stylesheet" href={ inter.url } />
      </head>
      <body className={ inter.className }>
        <h2>This is here the navbar</h2>
        { children }
        <h2>This is footer section</h2>
      </body>
    </html>
  );
}
