import type { WeaponModalProp } from "../interface/weapon"
import '../styles/Modal.css'

function WeaponModal({weapon, isModalOpen, setIsModalOpen}: WeaponModalProp) {

    return (
        <div className="modal-container">
            <div className="modal-overlay" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className="modal-content modal-content-weapon">
                 
                    <img src={weapon.image} alt={weapon.name} className="rotating" /> 

                    <div className="center">
                        <p>Puiss.</p>
                        <p className="power number">{weapon.power}</p>
                    </div>

                    <div className="center">
                        <p>Element</p>
                        <p>{weapon.element}</p>
                    </div>

                    {weapon.attributes.map((attribute) =>(
                        <div className="center" key={attribute.name}>
                            <p>{attribute.name}</p>
                            <p>{attribute.value}</p>
                        </div>
                    ))}

                    <p className="level">
                        <span className="number">
                            LVL 4 :{" "}
                        </span> 
                        {weapon.passiveEffects.Lvl4}
                    </p>
                    <p className="level">
                        <span className="number">
                            LVL 10 :{" "}
                        </span> 
                        {weapon.passiveEffects.Lvl10}
                    </p>                   
                    <p className="level">
                        <span className="number">
                            LVL 20 :{" "}
                        </span> 
                        {weapon.passiveEffects.Lvl20}
                    </p>

                    <input type="image" 
                        onClick={() => setIsModalOpen(!isModalOpen)} 
                        src="/images/mark-status-effect-clair-obscur-expedition-33-wiki-guide.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default WeaponModal