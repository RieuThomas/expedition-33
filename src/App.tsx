import './styles/reset.css'
import './styles/variables.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header>
            <img src="https://store.ign.com/cdn/shop/files/expedition-33-logo.png?v=1759871602" alt="title-image"/>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/equipment">Equipment</Link>
              <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="dropdown-container">
                <Link to="/character">Characters</Link>
                {isOpen &&
                <div className='dropdown'>
                  <Link to="/character/Gustave">Gustave</Link>
                  <Link to="/character/Lune">Lune</Link>
                  <Link to="/character/Maelle">Maelle</Link>
                  <Link to="/character/Sciel">Sciel</Link>
                  <Link to="/character/Verso">Verso</Link>
                  <Link to="/character/Monoco">Monoco</Link>  
                </div>          
                }
              </div>           
              <Link to="/bestiary">Bestiary</Link>
            </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
            <p>© 2025 Wild Code School ade with 💖 by wilder</p>
            <p>"My, what lovely footer."</p>
      </footer>
    </> 
  )
}

export default App
