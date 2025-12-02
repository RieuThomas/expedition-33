export interface SkillsProp {
    name : string,
    description : string,
    description_2?: string,
    gradient_charge?:boolean,
    costAP : number | string,
    image : string
}

export interface SkillListProp {
    skills : SkillsProp[]
}


export interface SkillModalProp{
    name : string,
    description : string,
    description_2?: string,
    costAP : number | string,
    image : string,
    isModalOpen : boolean, 
    gradient_charge?:boolean,
    setIsModalOpen :React.Dispatch<React.SetStateAction<boolean>>
}