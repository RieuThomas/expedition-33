import Expedition from '../data/data.ts'
import type { CharacterAboutProps } from '../interface/character.ts'
import CharacterSection from '../component/CharacterSection.tsx'

function Character() {
    return(
        Expedition.characterAbout.map((characterInfos: CharacterAboutProps) => (
          <CharacterSection key={characterInfos.character} characterInfos={characterInfos} />
        ))
    )
}

export default Character