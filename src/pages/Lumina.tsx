import { useExpedition } from "../context/ExpeditionContext"

function Lumina() {

    const { luminasPictos } = useExpedition()

    return(
        <>
            <h1>All Luminas</h1>
            <section className="all-character">
                {luminasPictos.map((lumina) => (             
                        <article key={lumina.name}>
                            <img src={lumina.image} alt={lumina.name} />
                            <h2>{lumina.name}</h2>
                            <p>{lumina.effect}</p>
                            <p>{lumina.lumina_points}</p>
                        </article>                 
                ))}         
            </section>
        </>
    )
}

export default Lumina