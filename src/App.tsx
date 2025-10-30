import './styles/reset.css'
import './styles/variables.css'
import './styles/App.css'
import Expedition from './data/data.ts'
import type { CharacterAboutProps } from './interface/character.ts'
import CharacterSection from './component/CharacterSection.tsx'
import Header from './component/Header.tsx'
import Footer from './component/Footer.tsx'

function App() {

  return (
    <>
      <Header />

      <main>
        {Expedition.characterAbout.map((characterInfos: CharacterAboutProps) => (
          <CharacterSection key={characterInfos.character} characterInfos={characterInfos} />
        ))}
      </main>

      <Footer />
    </> 
  )
}

export default App
