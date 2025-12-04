import { useParams } from "react-router"
import WeaponsList from '../component/WeaponsList.tsx'
import SkillsList from "../component/SkillsList.tsx"
import CharacterSection from "../component/CharacterSection.tsx"
import { useExpedition } from "../context/ExpeditionContext.tsx"

function CharacterCard() {
    const { characterAbout } = useExpedition()
    const { names } = useParams()
    const characterToShow = characterAbout.find((character) => character.name === names)

    return  (
        <>
            <h2>{names}</h2>
            {characterToShow && 
            <section className='character'>
                <CharacterSection secondPortrait={characterToShow.secondPortrait} description={characterToShow.description} />
            </section>}

            <h2>Skills</h2>
            {characterToShow && 
            <section className={`skills ${characterToShow.name.toLowerCase()}-skills`}>
                <SkillsList skills={characterToShow.skills} />
            </section>}

            <h2>Weapons</h2>
            {characterToShow && 
            <section className={`weapons ${characterToShow.name.toLowerCase()}-weapons`}>
                <WeaponsList weapons={characterToShow.weapons} />
            </section>}
        </>
    )   
}
export default CharacterCard