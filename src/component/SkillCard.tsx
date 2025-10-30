import { useState } from "react"
import type { SkillsProp } from "../interface/skills"
import SkillModal from "./SkillModal"

function SkillCard({image, name, costAP, description}: SkillsProp) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <>
            <article onClick={() => setIsModalOpen(!isModalOpen)}>
                <img src={image} alt={name} />
                <h3>{name}</h3>       
            </article>

            {isModalOpen && (
                <SkillModal
                image={image}
                name={name}
                costAP={costAP}
                description={description}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
                />
            )}
        </>        
    )
}

export default SkillCard