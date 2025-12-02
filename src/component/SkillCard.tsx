import { useState } from "react"
import type { Skill } from "../interface/skills"
import SkillModal from "./SkillModal"

function SkillCard({skill}: {skill: Skill}) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <>
            <article onClick={() => setIsModalOpen(!isModalOpen)}>
                <img src={skill.image} alt={skill.name} />
                <h3>{skill.name}</h3>       
            </article>

            {isModalOpen && (
                <SkillModal
                skill={skill}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
                />
            )}
        </>        
    )
}

export default SkillCard