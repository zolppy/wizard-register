import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { roboto } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Mage Registry of the Kingdom of Eldoria • Royal Archives",
  description:
    "Register as a mage in the kingdom of Eldoria! Join the Royal Archives to unlock exclusive mystical powers, quests, and resources.",
  authors: [
    {
      name: "Gabriel Cavalcante de Jesus Oliveira",
      url: "https://github.com/zolppy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Main>
          <Section>{children}</Section>
        </Main>
      </body>
      <GoogleAnalytics gaId="G-V484E8ZZ00" />
    </html>
  );
}
