import { useState } from "react"
import type { WeaponsProp } from "../interface/weapon"
import WeaponModal from "./WeaponModal"

function WeaponsCard({image, name, element, attributes, power, passiveEffects}: WeaponsProp) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <article onClick={() => setIsModalOpen(!isModalOpen)}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </article>

            {isModalOpen && (
                <WeaponModal
                image={image}
                name={name}
                element={element}
                attributes={attributes}
                power={power}
                passiveEffects={passiveEffects}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
                />
            )}
        </>
    )
}

export default WeaponsCard