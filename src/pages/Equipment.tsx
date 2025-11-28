import Expedition from '../data/data.ts'
import WeaponsList from '../component/WeaponsList.tsx'
import SkillsList from "../component/SkillsList.tsx"
import type { CharacterAboutProps } from '../interface/character.ts'

function Equipment() {
    const characters = Expedition.characterAbout

    return (
        characters.map((character:CharacterAboutProps) => (
            character.name !== 'Verso' && (
                <>
                    <h2>{character.name === 'Gustave' 
                        ? `All Weapons for ${character.name } & Verso`
                        : `All Weapons for ${character.name }`}</h2>
                    <section className={`weapons ${character.name.toLowerCase()}-weapons`}>
                        <WeaponsList weapons={character.weapons}/>
                    </section>
                </>
            )     
        ))
    )
}

export default Equipment