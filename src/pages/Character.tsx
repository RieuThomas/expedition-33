import { Link } from 'react-router'
import Expedition from '../data/data.ts'
import '../styles/Character.css'

function Character() {
    const characters = Expedition.characterAbout
    
    return(
        <>
            <h1>All Characters</h1>
            <section className="all-character">
                {characters.map((character) => (
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