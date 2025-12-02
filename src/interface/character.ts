import type { SkillsProp } from "./skills";
import type { WeaponsProp } from "./weapon";

export interface CharacterAboutProps {
  name: string,
  firstPortrait: string,
	secondPortrait: string,
	description: string,
  description_2?: string,
  gradient_charge?:boolean,
  sentence: string,
  weapons : WeaponsProp[],
  skills : SkillsProp[],
}

export interface CharacterSectionProps {
  secondPortrait: string,
  description: string,
}

