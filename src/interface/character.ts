import type { SkillsProp } from "./skills";
import type { WeaponsProp } from "./weapon";

export interface CharacterAboutProps {
  name : string,
  firstPortrait: string,
	secondPortrait: string,
	description: string,
  sentence: string,
  weapons : WeaponsProp[],
  skills : SkillsProp[],
}

export interface CharacterSectionProps {
  characterInfos : CharacterAboutProps
}