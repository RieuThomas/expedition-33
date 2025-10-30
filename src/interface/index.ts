import type { CharacterAboutProps } from "./character"
import type { LuminasPictosProps } from "./lumina"
import type { AllstatusAndTypesProps } from "./status"

export interface ExpeditionProps {
  characterAbout: CharacterAboutProps[],
  allStatusAndTypes : AllstatusAndTypesProps
  luminasPictos : LuminasPictosProps[]
}

export interface UseStateToggleType {
  isActive : boolean
  setIsActive:React.Dispatch<React.SetStateAction<boolean>>
  name :string
}