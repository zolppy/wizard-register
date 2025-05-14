import Image from "next/image";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { Container } from "@/app/components/Container";
import { Ornament } from "@/app/components/Ornament";
import { H1 } from "@/app/components/H1";
import { P } from "@/app/components/P";
import { bubblesImg } from "@/utils/data/images";

export default function Finishing() {
  return (
    <>
      <Main>
        <Section>
          <Image
            src={bubblesImg.src}
            title={bubblesImg.title}
            alt={bubblesImg.alt}
            className="rounded-[8px]"
          />
          <Container>
            <Ornament />
            <H1>✨ Seu Destino Mágico Está Selado! ✨</H1>
            <P>Poeira de estrelas se agita ao seu redor! 🌌</P>
            <P>
              Bem-vindo, aspirante a mago de Eldoria! Preencha este formulário
              para se juntar ao Arquivo Real de Magos e garantir acesso a
              grimoires secretos, torneios de feitiçaria e missões épicas. Suas
              respostas moldarão seu destino no reino!
            </P>
            <P>
              Seu registro no <strong>Arquivo Real de Eldoria</strong> foi
              gravado nos pergaminhos eternos. Em breve, um corvo místico
              entregará seu selo de mago e orientações para acesso aos portais
              secretos. Mantenha sua varinha próxima e seus olhos atentos às
              constelações — grandes aventuras o aguardam!
            </P>
            <P>
              Que os cristais de Eldoria brilhem em seu caminho, <br />
              <strong>A Ordem dos Arcanjos Celestiais</strong>
            </P>
            <P>
              🔮 Dica: Verifique sua bolsa de mensagens místicas (e-mail) nas
              próximas luas para confirmação!
            </P>
          </Container>
        </Section>
      </Main>
    </>
  );
}

Finishing.displayName = "Finishing";
