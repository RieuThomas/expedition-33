import type { Skill } from "./skills";
import type { Weapon } from "./weapon";

export interface CharacterAboutProps {
  name: string,
  firstPortrait: string,
	secondPortrait: string,
	description: string,
  description_2?: string,
  gradient_charge?:boolean,
  sentence: string,
  weapons : Weapon[],
  skills : Skill[],
}

export interface CharacterSectionProps {
  secondPortrait: string,
  description: string,
}

