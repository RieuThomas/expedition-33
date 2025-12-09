import WordStyle from "../component/WordStyle"
import { useExpedition } from "../context/ExpeditionContext"

function StatusEffect() {

    const { allStatusAndTypes } = useExpedition()
   
    return(
        <>
            <h1>All Status</h1>
            <section className="all-status">
                {allStatusAndTypes.buffs.map((buff) => (             
                        <article key={buff.name}>                           
                            <h2>
                                <WordStyle description={buff.name} />
                            </h2>
                            <p>{buff.description}</p>
                        </article>                 
                ))} 
                {allStatusAndTypes.debuffs.map((debuff) => (             
                        <article key={debuff.name}>                           
                            <h2>
                                <WordStyle description={debuff.name} />
                            </h2>
                            <p>{debuff.description}</p>
                        </article>                 
                ))}
                {allStatusAndTypes.damageTypes.map((type) => (             
                        <article key={type}>                           
                            <h2>
                                <WordStyle description={type} />
                            </h2>                          
                        </article>                 
                ))} 
                {allStatusAndTypes.statusEffects.map((status) => (             
                        <article key={status.name}>                           
                            <h2>
                                <WordStyle description={status.name} />
                            </h2>
                            <p>{status.description}</p>
                        </article>                 
                ))}         
            </section>
        </>
    )
}

export default StatusEffect