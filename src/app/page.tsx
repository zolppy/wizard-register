"use client";

import Image from "next/image";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { Form } from "@/app/components/Form";
import { Container } from "@/app/components/Container";
import { Ornament } from "@/app/components/Ornament";
import { H1 } from "@/app/components/H1";
import { P } from "@/app/components/P";
import { WarningMessage } from "@/app/components/WarningMessage";
import { InputLabel } from "@/app/components/InputLabel";
import { Star } from "@/app/components/Star";
import { InputWrapper } from "@/app/components/InputWrapper";
import { InputField } from "@/app/components/InputField";
import { Select } from "@/app/components/Select";
import { Option } from "@/app/components/Option";
import { CheckContainer } from "@/app/components/CheckContainer";
import { CheckWrapper } from "@/app/components/CheckWrapper";
import { TextArea } from "@/app/components/TextArea";
import { Btn } from "@/app/components/Btn";
import { bubblesImg } from "@/utils/data/images";
import { FieldValues, useForm } from "react-hook-form";
import { Specialty } from "@/utils/enums/specialty";
import { getCurrentDate } from "@/utils/functions/date";
import { Material } from "@/utils/enums/material";
import { Artefact } from "@/utils/enums/artefact";

export default function Home() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  function onSubmitForm(data: FieldValues) {
    console.log(data);
  }

  return (
    <>
      <Main>
        <Section>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <Image
              src={bubblesImg.src}
              title={bubblesImg.title}
              alt={bubblesImg.alt}
              className="rounded-[8px]"
            />
            <Container>
              <Ornament />
              <H1>Registro Místico de Eldoria: Forje Seu Legado!</H1>
              <P>
                Bem-vindo, aspirante a mago de Eldoria! Preencha este formulário
                para se juntar ao Arquivo Real de Magos e garantir acesso a
                grimoires secretos, torneios de feitiçaria e missões épicas.
                Suas respostas moldarão seu destino no reino!
              </P>
              <WarningMessage>* Indica uma pergunta obrigatória</WarningMessage>
            </Container>
            <Container>
              <InputLabel htmlFor="name">
                01 - Nome Arcano Completo: <Star />
              </InputLabel>
              <P>
                Como você será conhecido nos anais da magia? (Ex: Zorathion
                Fulgelunar)
              </P>
              acentos)
              <InputWrapper>
                <InputField
                  id="name"
                  placeholder="Insira seu nome arcano..."
                  {...register("name", {
                    required: "Nome arcano completo é obrigatório.",
                    minLength: {
                      value: 3,
                      message: "Mínimo 3 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Mínimo 50 caracteres.",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÿ\s']+$/,
                      message: "Formato inválido!",
                    },
                  })}
                />
                {errors.name && (
                  <WarningMessage>
                    {errors.name.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="specialty">
                02 - Especialidade Mágica <Star />
              </InputLabel>
              <P>Qual é seu domínio primário?</P>
              <InputWrapper>
                <Select
                  id="specialty"
                  {...register("speciality", {
                    required: "Especialidade mágica é obrigatória.",
                  })}
                >
                  <Option>Escolha</Option>
                  <Option value={Specialty.Elemental}>Elemental</Option>
                  <Option value={Specialty.Necromancy}>Necromancia</Option>
                  <Option value={Specialty.Illusionism}>Ilusionismo</Option>
                  <Option value={Specialty.Healing}>Cura</Option>
                  <Option value={Specialty.Divination}>Adivinhação</Option>
                  <Option value={Specialty.Enchantment}>Encantamento</Option>
                </Select>
                {errors.speciality && (
                  <WarningMessage>
                    {errors.speciality.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="date">
                03 - Data de Despertar Mágico <Star />
              </InputLabel>
              <P>Quando sua magia despertou pela primeira vez?</P>
              <InputWrapper>
                <InputField
                  id="date"
                  type="date"
                  className="w-fit"
                  {...register("date", {
                    required: "Data de despertar mágico é obrigatória.",
                    min: {
                      value: "1900-01-01",
                      message: "Mínimo é 01/01/1900.",
                    },
                    max: {
                      value: getCurrentDate(),
                      message: "Data não pode ser superior à atual.",
                    },
                  })}
                />
                {errors.date && (
                  <WarningMessage>
                    {errors.date.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="power">
                04 - Nível de Poder Arcano (1-100) <Star />
              </InputLabel>
              <P>Avalie sua força mágica atual.</P>
              <InputWrapper>
                <InputField
                  id="power"
                  type="number"
                  placeholder="Ex: 75"
                  className="w-fit"
                  {...register("power", {
                    required: "Nível de poder arcano é obrigatório.",
                    min: {
                      value: 1,
                      message: "Mínimo 1.",
                    },
                    max: {
                      value: 100,
                      message: "Máximo 100.",
                    },
                  })}
                />
                {errors.power && (
                  <WarningMessage>
                    {errors.power.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="relative">05 - Familiar Mágico</InputLabel>
              <P>Nome do seu companheiro místico (corvo, gato, dragão...)</P>
              <InputWrapper>
                <InputField
                  id="relative"
                  placeholder="Ex: Ígneo, o Corvo de Obsidiana"
                  {...register("relative", {
                    maxLength: {
                      value: 50,
                      message: "Máximo 50 caracteres.",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Formato inválido!",
                    },
                  })}
                />
                {errors.relative && (
                  <WarningMessage>
                    {errors.relative.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <P>
                06 - Material da Varinha <Star />{" "}
              </P>
              <P>Selecione os materiais de sua varinha (múltipla escolha):</P>
              <InputWrapper>
                <CheckContainer>
                  <CheckWrapper>
                    <InputField
                      id={Material.WillowWood}
                      type="checkbox"
                      defaultValue={Material.WillowWood}
                      {...register("material", {
                        required: "Escolha pelo menos um",
                      })}
                    />
                    <InputLabel htmlFor={Material.WillowWood}>
                      Madeira de Salgueiro
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Material.PhoenixCore}
                      type="checkbox"
                      defaultValue={Material.PhoenixCore}
                      {...register("material", {
                        required: "Escolha pelo menos um",
                      })}
                    />
                    <InputLabel htmlFor={Material.PhoenixCore}>
                      Núcleo de Fênix
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Material.RunicSteel}
                      type="checkbox"
                      defaultValue={Material.RunicSteel}
                      {...register("material", {
                        required: "Escolha pelo menos um",
                      })}
                    />
                    <InputLabel htmlFor={Material.RunicSteel}>
                      Aço Rúnico
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Material.EtherealCrystal}
                      type="checkbox"
                      defaultValue={Material.EtherealCrystal}
                      {...register("material", {
                        required: "Escolha pelo menos um",
                      })}
                    />
                    <InputLabel htmlFor={Material.EtherealCrystal}>
                      Cristal Etéreo
                    </InputLabel>
                  </CheckWrapper>
                </CheckContainer>
                {errors.material && (
                  <WarningMessage>
                    {errors.material.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="spell">
                07 - Feitiço de Assinatura <Star />
              </InputLabel>
              <P>Descreva seu feitiço único (máx. 200 caracteres).</P>
              <InputWrapper>
                <TextArea
                  id="spell"
                  placeholder="Ex: Tempestade de Estrelas Cadentes"
                  {...register("spell", {
                    required: "Feitiço de assinatura é obrigatório.",
                    maxLength: {
                      value: 200,
                      message: "Máximo 200 caracteres.",
                    },
                  })}
                />
                {errors.spell && (
                  <WarningMessage>
                    {errors.spell.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <P>
                08 - Artefato Místico Possuído <Star />
              </P>
              <P>Qual artefato você carrega?</P>
              <InputWrapper>
                <CheckContainer>
                  <CheckWrapper>
                    <InputField
                      id={Artefact.DepthOrb}
                      type="radio"
                      defaultValue={Artefact.DepthOrb}
                      {...register("artefact", {
                        required: "Artefato místico possuído é obrigatório.",
                      })}
                    />
                    <InputLabel htmlFor={Artefact.DepthOrb}>
                      Orbe da Profundezas
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Artefact.LostSoulBook}
                      type="radio"
                      defaultValue={Artefact.LostSoulBook}
                      {...register("artefact", {
                        required: "Artefato místico possuído é obrigatório.",
                      })}
                    />
                    <InputLabel htmlFor={Artefact.LostSoulBook}>
                      Livro das Almas Perdidas
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Artefact.EclipseAmulet}
                      type="radio"
                      defaultValue={Artefact.EclipseAmulet}
                      {...register("artefact", {
                        required: "Artefato místico possuído é obrigatório.",
                      })}
                    />
                    <InputLabel htmlFor={Artefact.EclipseAmulet}>
                      Amuleto do Eclipse
                    </InputLabel>
                  </CheckWrapper>
                  <CheckWrapper>
                    <InputField
                      id={Artefact.None}
                      type="radio"
                      defaultValue={Artefact.None}
                      {...register("artefact", {
                        required: "Artefato místico possuído é obrigatório.",
                      })}
                    />
                    <InputLabel htmlFor={Artefact.None}>Nenhum</InputLabel>
                  </CheckWrapper>
                </CheckContainer>
                {errors.artefact && (
                  <WarningMessage>
                    {errors.artefact.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <InputLabel htmlFor="">
                09 - Senha Secreta do Portal <Star />
              </InputLabel>
              <P>Crie uma senha para acessar portais místicos.</P>
              <InputWrapper>
                <InputField
                  type="password"
                  placeholder="********"
                  className="w-fit"
                  {...register("password", {
                    required: "Senha secreta do portal é obrigatória.",
                    minLength: {
                      value: 8,
                      message: "Mínimo 8 caracteres.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                      message: "A senha deve ser forte.",
                    },
                  })}
                />
                {errors.password && (
                  <WarningMessage>
                    {errors.password.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Container>
              <P>
                10 - Juramento à Ordem dos Magos <Star />
              </P>
              <P>Promete honrar o código de conduta mágica?</P>
              <InputWrapper>
                <CheckContainer>
                  <CheckWrapper>
                    <InputField
                      id="oath"
                      type="checkbox"
                      defaultValue="Yes"
                      {...register("oath", {
                        required: "Juramento à ordem dos magos é obrigatório.",
                      })}
                    />
                    <InputLabel htmlFor="oath">
                      Sim, juro solenemente.
                    </InputLabel>
                  </CheckWrapper>
                </CheckContainer>
                {errors.oath && (
                  <WarningMessage>
                    {errors.oath.message as string}
                  </WarningMessage>
                )}
              </InputWrapper>
            </Container>
            <Btn type="submit">Enviar</Btn>
          </Form>
        </Section>
      </Main>
    </>
  );
}

Home.displayName = "Home";
