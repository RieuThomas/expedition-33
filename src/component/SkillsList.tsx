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
                    costAP={skill.costAP} 
                    key={skill.name} 
                    />
            ))} 
        </>  
    )
}
export default SkillsList
