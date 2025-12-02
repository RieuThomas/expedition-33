import type { WeaponListProp, Weapon } from "../interface/weapon"
import WeaponsCard from "./WeaponsCard"

function WeaponsList({ weapons }: WeaponListProp) {
   
    return (
        <>
            {weapons.map((weapon: Weapon) => (               
                <WeaponsCard 
                weapon={weapon}
                />
            ))} 
        </>  
    )
}
export default WeaponsList