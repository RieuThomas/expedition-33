import type { Skill, SkillListProp } from "../interface/skills"
import SkillCard from "./SkillCard"

function SkillsList({ skills }: SkillListProp) {
   
    return (
        <>
            {skills.map((skill: Skill) => (           
                    <SkillCard skill={skill} />
            ))} 
        </>  
    )
}
export default SkillsList
