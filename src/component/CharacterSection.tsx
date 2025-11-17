import type { CharacterSectionProps } from '../interface/character.ts'

function CharacterSection({secondPortrait, description}: CharacterSectionProps) {
      return (

        <>
          <div className='text-container'>
            <p>{description}</p>   
          </div>
          <img src={secondPortrait} alt="bonjour" />
        </>
             
      )
}

export default CharacterSection