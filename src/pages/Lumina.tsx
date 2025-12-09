import { useState } from "react"
import { useExpedition } from "../context/ExpeditionContext"
import '../styles/Lumina.css'
import type { LuminasPictosProps } from "../interface/lumina"

function Lumina() {
    const { luminasPictos } = useExpedition()
    const [searchLumina, setSearchLumina] = useState('')
    const [sortLumina, setSortLumina] = useState(luminasPictos)

    const sortLuminaOptions: { value: keyof LuminasPictosProps, label: string }[] = [
        { value: "name", label: "Name" },
        { value: "effect", label: "Effect" },
        { value: "lumina_points", label: "Cost" }
    ];

    function sortBy(e:React.ChangeEvent<HTMLSelectElement>) {
        const key = e.target.value as keyof LuminasPictosProps
        setSortLumina([...sortLumina].sort((a, b) => {
            if (typeof a[key] === 'number' && typeof b[key] === 'number') {
                return a[key] - b[key]
            } else {
                return String(a[key]).localeCompare(String(b[key]))
            }
        }))
    }  

    return(
        <>
            <div className="search-sort">
                <label htmlFor="lumina-search">
                Search{" : "}    
                    <input 
                        type="text" 
                        id="lumina-search"
                        value={searchLumina}
                        onChange={(e) => setSearchLumina(e.target.value)} 
                        placeholder="Search"
                    />
                </label> 
                <label htmlFor="lumina-select">
                Sort by{" : "}
                    <select id="lumina-select" onChange={sortBy}>
                        {sortLuminaOptions.map((option) => (
                        <option value={option.value} key={option.label}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                </label>
            </div>
            <section className="all-lumina">     
                <article className="lumina-title">
                            <h3 data-key='name'>Name</h3>
                            <h3 data-key='effect'>Effect</h3>
                            <h3 >Cost</h3>
                        </article>
                {sortLumina.filter(lumina => !searchLumina ? lumina : lumina.name.toLowerCase().includes(searchLumina))
                    .map((lumina) => (             
                        <article key={lumina.name} className="lumina-article">
                            <img src={lumina.image} alt={lumina.name} />
                            <h3>{lumina.name}</h3>
                            <p>{lumina.effect}</p>
                            <p className="number">{lumina.lumina_points}</p>
                        </article>                 
                    ))
                }         
            </section>
        </>
    )
}

export default Lumina