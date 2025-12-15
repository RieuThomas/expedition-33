import './styles/reset.css'
import './styles/variables.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'
import { useState } from 'react'
import { useExpedition } from './context/ExpeditionContext'

function App() {
	const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false)
	const [isCharactersOpen, setIsCharactersOpen] = useState(false)
  const { characterAbout } = useExpedition()
  const equipments = ['Weapons', 'Skills', 'Status_Effect','Lumina']

  return (
    <>
      <header id='header'>
        <img src="/images/clair_obscur_expedition_33.png" alt="title-image"/>
        <nav>
          <Link to="/">Home</Link>
          <div 
            onMouseEnter={() => setIsEquipmentsOpen(true)} 
            onMouseLeave={() => setIsEquipmentsOpen(false)} 
            className="dropdown-container"
          >
            <p>Equipment</p>
            {isEquipmentsOpen &&
            <div className='dropdown' onClick={() => setIsEquipmentsOpen(false)}>
              {equipments.map((equipment) => (
                <Link to={`/${equipment.toLowerCase()}`}>{equipment.split('_').join(' ')}</Link>
              ))}
            </div>          
            }
          </div>
          <div 
            onMouseEnter={() => setIsCharactersOpen(true)} 
            onMouseLeave={() => setIsCharactersOpen(false)} 
            className="dropdown-container"
          >
            <Link to="/character">Characters</Link>
            {isCharactersOpen &&
            <div className='dropdown'onClick={() => setIsCharactersOpen(false)}>
              {characterAbout.map((character) => (
                <Link to={`/character/${character.name}`}>{character.name}</Link>
              ))}  
            </div>          
            }
          </div>           
          <Link to="/bestiary">Bestiary</Link>
        </nav>
          <a href='#header'className='button-to-top'>
            <img src="/images/top.png" alt="arrow to the top" />
          </a>
      </header>

      <main>
        <Outlet />
        
      </main>

      <footer>
            <p>© 2025 Wild Code School made with 💖 by wilder</p>
            <p>"My, what lovely footer."</p>
      </footer>
    </> 
  )
}

export default App
