import type { SkillModalProp } from "../interface/skills"
import closeButton from '../assets/mark-status-effect-clair-obscur-expedition-33-wiki-guide.png'

function SkillModal({name, description, costAP, image, isModalOpen, setIsModalOpen}: SkillModalProp) {
    return (
        
        <div className="modal-container">
            <div className="modal-overlay" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="modal-content modal-content-skills">
                    <img src={image} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="costAP-container">
                        <p className="costAP number">{costAP}</p>
                    </div>
                    <input type="image" onClick={() => setIsModalOpen(!isModalOpen)} src={closeButton}/>
                </div>
            </div>
        </div>

    )
}

export default SkillModal