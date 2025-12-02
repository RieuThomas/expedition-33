import type { SkillListProp, SkillsProp } from "../interface/skills"
import SkillCard from "./SkillCard"

function SkillsList({ skills }: SkillListProp) {
   
    return (
        <>
            {skills.map((skill: SkillsProp) => (           
                    <SkillCard 
                    image={skill.image} 
                    name={skill.name} 
                    description={skill.description}
                    description_2={skill.description_2}
                    costAP={skill.costAP} 
                    key={skill.name}
                    gradient_charge={skill.gradient_charge} 
                    />
            ))} 
        </>  
    )
}
export default SkillsList
