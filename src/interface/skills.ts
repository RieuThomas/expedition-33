export interface SkillsProp {
    name : string,
    description : string,
    description_2?: string,
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
    setIsModalOpen :React.Dispatch<React.SetStateAction<boolean>>
}