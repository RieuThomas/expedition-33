import Expedition from '../data/data.ts'
import SkillList from '../component/SkillsList.tsx'
import type { CharacterAboutProps } from '../interface/character.ts'

function Skills() {
    const characters = Expedition.characterAbout

    return (
        characters.map((character:CharacterAboutProps) => (
            <>
                <h2>{character.name}</h2>
                <section className={`skills ${character.name.toLowerCase()}-skills`}>
                    <SkillList skills={character.skills}/>
                </section>
            </>
         )     
     ))
}

export default Skills