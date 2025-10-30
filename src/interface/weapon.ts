

export interface WeaponsProp {
    name : string,
    element : string,
    power : number,
    attributes :  {
            name : string,
            value : string,
        }[],
    passiveEffects : {
        Lvl4 : string,
        Lvl10 : string,
        Lvl20 : string,
    },
    image : string,
}

export interface WeaponListProp {
    weapons : WeaponsProp[]
}

export interface WeaponModalProp {
    name : string,
    element : string,
    power : number,
    attributes :  {
            name : string,
            value : string,
        }[],
    passiveEffects : {
        Lvl4 : string,
        Lvl10 : string,
        Lvl20 : string,
    },
    image : string,
    isModalOpen : boolean, 
    setIsModalOpen :React.Dispatch<React.SetStateAction<boolean>>
}