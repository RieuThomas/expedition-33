

export interface Weapon {
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
    weapons : Weapon[]
}

export interface WeaponModalProp {
    weapon: Weapon,
    isModalOpen : boolean, 
    setIsModalOpen :React.Dispatch<React.SetStateAction<boolean>>
}