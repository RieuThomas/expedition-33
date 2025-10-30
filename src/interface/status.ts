export interface AllstatusAndTypesProps {
    damageTypes : string[],
    statusEffects : {
      name : string,
      description  : string,
    }[],
    buffs : {
      name : string,
      description  : string,
    }[],
    debuffs : {
      name : string,
      description  : string,
    }[]
}