import type { WeaponModalProp } from "../interface/weapon"
import closeButton from '../assets/mark-status-effect-clair-obscur-expedition-33-wiki-guide.png'


function WeaponModal({image, name, power, element, passiveEffects, attributes, isModalOpen, setIsModalOpen}: WeaponModalProp) {

    return (
        <div className="modal-container">
            <div className="modal-overlay" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="modal-content modal-content-weapon">
                 
                    <img src={image} alt={name} /> 

                    <div className="center">
                        <p>Puiss.</p>
                        <p className="power number">{power}</p>
                    </div>

                    <div className="center">
                        <p>Element</p>
                        <p>{element}</p>
                    </div>

                    {attributes.map((attribute) =>(
                        <div className="center" key={attribute.name}>
                            <p>{attribute.name}</p>
                            <p>{attribute.value}</p>
                        </div>
                    ))}

                    <p className="level">LVL 4 : {passiveEffects.Lvl4}</p>
                    <p className="level">LVL 10 : {passiveEffects.Lvl10}</p>                   
                    <p className="level">LVL 20 : {passiveEffects.Lvl20}</p>

                    <input type="image" onClick={() => setIsModalOpen(!isModalOpen)} src={closeButton}/>
                </div>
            </div>
        </div>
    )
}

export default WeaponModal