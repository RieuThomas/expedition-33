import { createContext, useContext, type ReactNode } from "react";
import Expedition from "../data/data";
import type { ExpeditionProps } from "../interface";

const ExpeditionContext = createContext<ExpeditionProps>({
    characterAbout:[],
    allStatusAndTypes: {
    damageTypes: [],
    statusEffects: [],
    buffs: [],
    debuffs: []
    },
    luminasPictos:[]
})

export function ExpeditionProvider( {children}: { children: ReactNode } ) {

    const characterAbout = Expedition.characterAbout
    const allStatusAndTypes = Expedition.allStatusAndTypes
    const luminasPictos = Expedition.luminasPictos

    return (
        <ExpeditionContext.Provider value={{characterAbout, allStatusAndTypes, luminasPictos}}>
            {children}
        </ExpeditionContext.Provider>
    )
}

export const useExpedition = () => useContext(ExpeditionContext)