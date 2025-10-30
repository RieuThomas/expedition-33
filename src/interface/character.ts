import type { SkillsProp } from "./skills";
import type { WeaponsProp } from "./weapon";

export interface CharacterAboutProps {
  character : string,
  weapons : WeaponsProp[],
  skills : SkillsProp[],
}

export interface CharacterSectionProps {
  characterInfos : CharacterAboutProps
}