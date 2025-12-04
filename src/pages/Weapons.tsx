import WeaponsList from '../component/WeaponsList.tsx'
import { useExpedition } from '../context/ExpeditionContext.tsx'
import type { CharacterAboutProps } from '../interface/character.ts'

function Weapons() {
    const { characterAbout } = useExpedition()

    return (
        characterAbout.map((character:CharacterAboutProps) => (
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

export default Weapons