import { Link } from 'react-router'
import '../styles/Character.css'
import { useExpedition } from '../context/ExpeditionContext.tsx'

function Character() {
    const { characterAbout } = useExpedition()
    
    return(
        <>
            <section className="all-character">
                {characterAbout.map((character) => (
                    <Link
                        key={character.name} 
                        to={`/character/${character.name}`}
                        className='character-link'
                    >
                        <article>
                            <img src={character.firstPortrait} alt="first-portrait" />
                            <h2>{character.name}</h2>
                            <p className='sentence'>{`"${character.sentence}"`}</p>
                        </article>
                    </Link>
                ))}         
            </section>
        </>

    )
}

export default Character