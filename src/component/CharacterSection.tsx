import { useState } from 'react'
import Checkbox from './Checkbox.tsx'
import SkillsList from './SkillsList.tsx'
import WeaponsList from './WeaponsList.tsx'
import type { CharacterSectionProps } from '../interface/character.ts'

function CharacterSection({characterInfos}: CharacterSectionProps) {

        const [skillsCheckIsActive, setSkillsCheckIsActive] = useState<boolean>(false)
        const [weaponsCheckIsActive, setWeaponsCheckIsActive] = useState<boolean>(false)

      return (

        <div key={characterInfos.character}>
        <h2>{characterInfos.character}</h2>

        <aside>
          <Checkbox 
          isActive={weaponsCheckIsActive} 
          setIsActive={setWeaponsCheckIsActive} 
          name={`${characterInfos.character}-Weapons`}
          />
          
          <Checkbox 
          isActive={skillsCheckIsActive} 
          setIsActive={setSkillsCheckIsActive} 
          name={`${characterInfos.character}-Skills`} 
          />
        </aside>  
        
        {weaponsCheckIsActive &&  
        <section className={`weapons ${characterInfos.character.toLowerCase()}-weapons`}>
          <WeaponsList weapons={characterInfos.weapons} key={characterInfos.character} />
        </section> }
        
        {skillsCheckIsActive &&  
        <section className={`skills ${characterInfos.character.toLowerCase()}-skills`}>
          <SkillsList skills={characterInfos.skills} key={characterInfos.character} />
        </section> }
       
        </div>

      )
}

export default CharacterSection