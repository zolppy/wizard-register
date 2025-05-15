"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  function onSubmitForm(data: FieldValues) {
    console.log(data);
    router.push("/finishing");
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Image
          priority={true}
          src={bubblesImg.src}
          title={bubblesImg.title}
          alt={bubblesImg.alt}
          className="rounded-[8px]"
        />
        <Container>
          <Ornament />
          <H1>Mystical Record of Eldoria: Forge Your Legacy!</H1>
          <P>
            Welcome, aspiring mage of Eldoria! Fill out this form to join the
            Royal Archive of Mages and gain access to secret grimoires,
            sorcerous tournaments, and epic quests. Your answers will shape your
            destiny in the realm!
          </P>
          <WarningMessage>* Indicates a required question.</WarningMessage>
        </Container>
        <Container>
          <InputLabel htmlFor="name">
            01 - Full Arcane Name: <Star />
          </InputLabel>
          <P>
            What will you be known as in the annals of magic? (Ex: Zorathion
            Fulgelunar).
          </P>
          <InputWrapper>
            <InputField
              id="name"
              placeholder="Enter your arcane name..."
              {...register("name", {
                required: "Full arcane name is required.",
                minLength: { value: 3, message: "Minimum 3 characters." },
                maxLength: { value: 50, message: "Minimum 50 characters." },
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s']+$/,
                  message: "Invalid format!",
                },
              })}
            />
            {errors.name && (
              <WarningMessage>{errors.name.message as string}</WarningMessage>
            )}
          </InputWrapper>
        </Container>
        <Container>
          <InputLabel htmlFor="specialty">
            02 - Magic Specialty: <Star />
          </InputLabel>
          <P>What is your primary domain?</P>
          <InputWrapper>
            <Select
              id="specialty"
              {...register("speciality", {
                required: "Magic specialty is required.",
              })}
            >
              <Option>Choose</Option>
              <Option value={Specialty.Elemental}>Elemental</Option>
              <Option value={Specialty.Necromancy}>Necromancy</Option>
              <Option value={Specialty.Illusionism}>Illusionism</Option>
              <Option value={Specialty.Healing}>Healing</Option>
              <Option value={Specialty.Divination}>Divination</Option>
              <Option value={Specialty.Enchantment}>Enchantment</Option>
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
            03 - Magical Awakening Date: <Star />
          </InputLabel>
          <P>When did your magic first awaken?</P>
          <InputWrapper>
            <InputField
              id="date"
              type="date"
              className="w-fit"
              {...register("date", {
                required: "Magical awakening date is required.",
                min: { value: "1900-01-01", message: "Minimum 01/01/1900." },
                max: {
                  value: getCurrentDate(),
                  message: "Date cannot be greater than the current date.",
                },
              })}
            />
            {errors.date && (
              <WarningMessage>{errors.date.message as string}</WarningMessage>
            )}
          </InputWrapper>
        </Container>
        <Container>
          <InputLabel htmlFor="power">
            04 - Arcane Power Level (1-100): <Star />
          </InputLabel>
          <P>Assess your current magical strength.</P>
          <InputWrapper>
            <InputField
              id="power"
              type="number"
              placeholder="Ex: 75."
              className="w-fit"
              {...register("power", {
                required: "Arcane power level is required.",
                min: { value: 1, message: "Minimum 1." },
                max: { value: 100, message: "Maximum 100." },
              })}
            />
            {errors.power && (
              <WarningMessage>{errors.power.message as string}</WarningMessage>
            )}
          </InputWrapper>
        </Container>
        <Container>
          <InputLabel htmlFor="relative">05 - Magical Familiar:</InputLabel>
          <P>Name of your mystical companion (crow, cat, dragon...).</P>
          <InputWrapper>
            <InputField
              id="relative"
              placeholder="Ex: Igneous, the Obsidian Raven."
              {...register("relative", {
                maxLength: { value: 50, message: "Maximum 50 characters." },
                pattern: { value: /^[A-Za-z\s]+$/, message: "Invalid format!" },
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
            06 - Wand Material: <Star />
          </P>
          <P>Select your wand materials.</P>
          <InputWrapper>
            <CheckContainer>
              <CheckWrapper>
                <InputField
                  id={Material.WillowWood}
                  type="checkbox"
                  value={Material.WillowWood}
                  {...register("material", {
                    required: "Choose at least one.",
                  })}
                />
                <InputLabel htmlFor={Material.WillowWood}>
                  Willow Wood
                </InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Material.PhoenixCore}
                  type="checkbox"
                  value={Material.PhoenixCore}
                  {...register("material", {
                    required: "Choose at least one.",
                  })}
                />
                <InputLabel htmlFor={Material.PhoenixCore}>
                  Phoenix Core
                </InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Material.RunicSteel}
                  type="checkbox"
                  value={Material.RunicSteel}
                  {...register("material", {
                    required: "Choose at least one.",
                  })}
                />
                <InputLabel htmlFor={Material.RunicSteel}>
                  Runic Steel
                </InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Material.EtherealCrystal}
                  type="checkbox"
                  value={Material.EtherealCrystal}
                  {...register("material", {
                    required: "Choose at least one.",
                  })}
                />
                <InputLabel htmlFor={Material.EtherealCrystal}>
                  Ethereal Crystal
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
            07 - Signature Spell: <Star />
          </InputLabel>
          <P>Describe your unique spell (max 200 characters).</P>
          <InputWrapper>
            <TextArea
              id="spell"
              placeholder="Ex: Storm of Shooting Stars."
              {...register("spell", {
                required: "Signature spell is required.",
                maxLength: { value: 200, message: "Maximum 200 characters." },
              })}
            />
            {errors.spell && (
              <WarningMessage>{errors.spell.message as string}</WarningMessage>
            )}
          </InputWrapper>
        </Container>
        <Container>
          <P>
            08 - Possessed Mystical Artifact: <Star />
          </P>
          <P>What artifact do you carry?</P>
          <InputWrapper>
            <CheckContainer>
              <CheckWrapper>
                <InputField
                  id={Artefact.DepthOrb}
                  type="radio"
                  value={Artefact.DepthOrb}
                  {...register("artefact", {
                    required: "Possessed mystical artifact is required.",
                  })}
                />
                <InputLabel htmlFor={Artefact.DepthOrb}>Depth Orb</InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Artefact.LostSoulBook}
                  type="radio"
                  value={Artefact.LostSoulBook}
                  {...register("artefact", {
                    required: "Possessed mystical artifact is required.",
                  })}
                />
                <InputLabel htmlFor={Artefact.LostSoulBook}>
                  Lost Soul Book
                </InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Artefact.EclipseAmulet}
                  type="radio"
                  value={Artefact.EclipseAmulet}
                  {...register("artefact", {
                    required: "Possessed mystical artifact is required.",
                  })}
                />
                <InputLabel htmlFor={Artefact.EclipseAmulet}>
                  Eclipse Amulet
                </InputLabel>
              </CheckWrapper>
              <CheckWrapper>
                <InputField
                  id={Artefact.None}
                  type="radio"
                  value={Artefact.None}
                  {...register("artefact", {
                    required: "Possessed mystical artifact is required.",
                  })}
                />
                <InputLabel htmlFor={Artefact.None}>None</InputLabel>
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
          <InputLabel htmlFor="password">
            09 - Secret Portal Password: <Star />
          </InputLabel>
          <P>Create a password to access mystical portals.</P>
          <InputWrapper>
            <InputField
              id="password"
              type="password"
              placeholder="********"
              className="w-fit"
              {...register("password", {
                required: "Secret portal password is required.",
                minLength: { value: 8, message: "Minimum 8 characters." },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                  message: "The password must be strong.",
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
            10 - Oath to the Order of Magi <Star />
          </P>
          <P>Do you promise to honor the magical code of conduct?</P>
          <InputWrapper>
            <CheckContainer>
              <CheckWrapper>
                <InputField
                  id="oath"
                  type="checkbox"
                  value="Yes"
                  {...register("oath", {
                    required: "Oath to the order of wizards is required.",
                  })}
                />
                <InputLabel htmlFor="oath">Yes, I solemnly swear.</InputLabel>
              </CheckWrapper>
            </CheckContainer>
            {errors.oath && (
              <WarningMessage>{errors.oath.message as string}</WarningMessage>
            )}
          </InputWrapper>
        </Container>
        <Btn type="submit">Send</Btn>
      </Form>
    </>
  );
}

Home.displayName = "Home";
