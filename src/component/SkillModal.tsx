import type { SkillModalProp } from "../interface/skills"
import closeButton from '../assets/mark-status-effect-clair-obscur-expedition-33-wiki-guide.png'
import '../styles/Modal.css'
import WordStyle from "./WordStyle"

function SkillModal({name, description, description_2, costAP, image, isModalOpen, setIsModalOpen, gradient_charge}: SkillModalProp) {
    return (
        
        <div className="modal-container">
            <div className="modal-overlay" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="modal-content modal-content-skills">
                    <img src={image} alt={name} className="skill-img" />
                    <div>
                        <h3>{name}</h3>
                        <WordStyle description={description}/>
                        <br />
                        {description_2 && 
                            <WordStyle description={description_2}/>
                        }
                    </div>
                    <div className={`number ${gradient_charge ? 'gradient-container' : 'costAP-container'}`}>
                        <p className= "number costAP">{costAP}</p>
                    </div>
                    <input type="image" onClick={() => setIsModalOpen(!isModalOpen)} src={closeButton}/>
                </div>
            </div>
        </div>

    )
}

export default SkillModal