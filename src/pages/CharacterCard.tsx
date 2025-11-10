import { useParams } from "react-router"
import Expedition from '../data/data.ts'
import WeaponsList from '../component/WeaponsList.tsx'
import SkillsList from "../component/SkillsList.tsx"

function CharacterCard() {
    const characters = Expedition.characterAbout
    const { names } = useParams()
    const characterToShow = characters.find((character) => character.name === names)

    return  (
        <>
            <h1>Hello {names}</h1>

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