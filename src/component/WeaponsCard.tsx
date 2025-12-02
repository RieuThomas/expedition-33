import { useState } from "react"
import type { Weapon } from "../interface/weapon"
import WeaponModal from "./WeaponModal"

function WeaponsCard({weapon}: {weapon: Weapon}) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <article onClick={() => setIsModalOpen(!isModalOpen)}>
                <img src={weapon.image} alt={weapon.name} />
                <h3>{weapon.name}</h3>
            </article>

            {isModalOpen && (
                <WeaponModal
                weapon={weapon}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
                />
            )}
        </>
    )
}

export default WeaponsCard