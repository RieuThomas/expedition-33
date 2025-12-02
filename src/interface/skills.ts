export interface Skill {
    name : string,
    description : string,
    description_2?: string,
    costAP : number | string,
    gradient_charge?:boolean,
    image : string
}

export interface SkillListProp {
    skills : Skill[]
}

export interface SkillModalProp{
    skill: Skill
    isModalOpen : boolean, 
    setIsModalOpen :React.Dispatch<React.SetStateAction<boolean>>
}