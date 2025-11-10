import './styles/reset.css'
import './styles/variables.css'
import './styles/App.css'
import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <header>
            <img src="https://store.ign.com/cdn/shop/files/expedition-33-logo.png?v=1759871602" alt="title-image"/>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/equipment">Equipment</Link>
              <Link to="/character">Characters</Link>
              <Link to="/bestiary">Bestiary</Link>
              <Link to="/character/Gustave">Gustave</Link>
              <Link to="/character/Lune">Lune</Link>
              <Link to="/character/Maelle">Maelle</Link>
              <Link to="/character/Sciel">Sciel</Link>
              <Link to="/character/Verso">Verso</Link>
              <Link to="/character/Monoco">Monoco</Link>
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
