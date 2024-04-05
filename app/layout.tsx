import type { Metadata } from "next";
import { Hind, Roboto, Montserrat} from "next/font/google";
import "./globals.css";
import HeaderMobile from "@/src/components/headerMobile/page";

const hind = Hind({ weight: ['300', '400', '500' , '600', '700'], subsets:['latin'], variable: '--font-hind' });
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets:['latin'], variable: '--font-roboto' });
const montserrat = Montserrat({ weight: ['300', '400', '500' , '600', '700'], subsets:['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Spotistats",
  description: "Spotify dashboard to track your listening habits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={` bg-black ${hind.variable} ${roboto.variable} ${montserrat.variable}`}>
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
