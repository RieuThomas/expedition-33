import type { SkillModalProp } from "../interface/skills"
import closeButton from '../assets/mark-status-effect-clair-obscur-expedition-33-wiki-guide.png'
import '../styles/Modal.css'
import WordStyle from "./WordStyle"

function SkillModal({skill, isModalOpen, setIsModalOpen}: SkillModalProp) {
    return (
        
        <div className="modal-container">
            <div className="modal-overlay" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="modal-content modal-content-skills">
                    <img src={skill.image} alt={skill.name} className="skill-img" />
                    <div>
                        <h3>{skill.name}</h3>
                        <WordStyle description={skill.description}/>
                        <br />
                        {skill.description_2 && 
                            <WordStyle description={skill.description_2}/>
                        }
                    </div>
                    <div className={`number ${skill.gradient_charge ? 'gradient-container' : 'costAP-container'}`}>
                        <p className= "number costAP">{skill.costAP}</p>
                    </div>
                    <input type="image" onClick={() => setIsModalOpen(!isModalOpen)} src={closeButton}/>
                </div>
            </div>
        </div>

    )
}

export default SkillModal