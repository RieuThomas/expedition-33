import WordStyle from "../component/WordStyle"
import '../styles/StatusEffect.css'
import { useExpedition } from "../context/ExpeditionContext"

function StatusEffect() {

    const { allStatusAndTypes } = useExpedition()
   
    return(
        <>
            <section className="all-status">
                <h2>Buffs</h2>
                {allStatusAndTypes.buffs.map((buff) => (             
                        <article key={buff.name}>                           
                            <h3>
                                <WordStyle description={buff.name} />
                            </h3>
                            <p>{buff.description}</p>
                        </article>                 
                ))}
            </section>
            <section className="all-status">   
                <h2>Debuffs</h2>  
                {allStatusAndTypes.debuffs.map((debuff) => (             
                        <article key={debuff.name}>                           
                            <h3>
                                <WordStyle description={debuff.name} />
                            </h3>
                            <p>{debuff.description}</p>
                        </article>                 
                ))}
            </section>
            <section className="all-status"> 
                <h2>Damage Types</h2> 
                {allStatusAndTypes.damageTypes.map((type) => (             
                        <article key={type}>                           
                            <h3>
                                <WordStyle description={type} /> damage
                                <img src={`/images/${type.toLowerCase()}-element-icon-clair-obscur-expedition-33-wiki-guide.png`} alt={type} />
                            </h3>     
                        </article>       
                ))}
            </section>
            <section className="all-status">
                <h2>Status Effect</h2>       
                {allStatusAndTypes.statusEffects.map((status) => (             
                        <article key={status.name}>                           
                            <h3>
                                {status.name}
                                <img src={`/images/${status.name.toLowerCase()}-status-effect-clair-obscur-expedition-33-wiki-guide.png`} alt={status.name} />
                            </h3>
                            <p>{status.description}</p>
                        </article>                 
                ))}
            </section>                           
        </>
    )
}

export default StatusEffect