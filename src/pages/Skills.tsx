import SkillList from '../component/SkillsList.tsx'
import type { CharacterAboutProps } from '../interface/character.ts'
import { useExpedition } from '../context/ExpeditionContext.tsx'

function Skills() {
    const { characterAbout } = useExpedition()

    return (
        characterAbout.map((character:CharacterAboutProps) => (
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