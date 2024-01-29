import { Inter } from "next/font/google";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Md Rokon Uzzaman | Web Developer",
  description: "Md Rokon Uzzaman is a web developer based in Dhaka, Bangladesh. He is a full-stack developer with a passion for building beautiful and functional user experiences.",
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
