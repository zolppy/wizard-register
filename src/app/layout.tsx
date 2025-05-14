import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { roboto } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Registro de Magos do Reino de Eldoria • Arquivo Real",
  description:
    "Registre-se como mago no reino de Eldoria! Junte-se ao Arquivo Real para desbloquear poderes, missões e recursos místicos exclusivos.",
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
    <html lang="pt-br">
      <body className={`${roboto.className} antialiased`}>
        <Main>
          <Section>{children}</Section>
        </Main>
      </body>
			<GoogleAnalytics gaId="G-V484E8ZZ00" />
    </html>
  );
}
