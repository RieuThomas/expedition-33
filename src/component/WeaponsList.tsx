import type { WeaponListProp, WeaponsProp } from "../interface/weapon"
import WeaponsCard from "./WeaponsCard"

function WeaponsList({ weapons }: WeaponListProp) {
   
    return (
        <>
            {weapons.map((weapon: WeaponsProp) => (               
                <WeaponsCard 
                image={weapon.image}
                name={weapon.name}
                element={weapon.element}
                power={weapon.power}
                attributes={weapon.attributes}
                passiveEffects={weapon.passiveEffects}
                key={weapon.name}
                />
            ))} 
        </>  
    )
}
export default WeaponsList